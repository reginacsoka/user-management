package com.regi.usermanagement;

import java.util.List;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@EnableAutoConfiguration
public class UserManagementController {
	
	@CrossOrigin
	@RequestMapping(value="/get-all",  produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<User> getAllUsers() {
		List<User> users = HandleRequests.getAllUsers();
		return users;
	}
	
	@CrossOrigin
	@RequestMapping(value="/get/{userId}",  method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public User getUser(@PathVariable int userId) {
		User u = HandleRequests.getUser(userId);
		return u;
	}
	
	@CrossOrigin
	@RequestMapping(value="/delete/{userId}",  method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public void deleteUser(@PathVariable int userId) {
		HandleRequests.deleteUser(userId);
	}
	
	@CrossOrigin
	@RequestMapping(value="/insert", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public User insertUser(@RequestBody User user) {
		User u = HandleRequests.insertUser(user);
		return u;
	}
	
	@CrossOrigin
	@RequestMapping(value="/update/{userId}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public User updateUser(@PathVariable int userId, @RequestBody User user) {
		User u = HandleRequests.updateUser(userId,user);
		return u;
	}
	
}

