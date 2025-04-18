import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool isButtonDisabled = true;

  @override
  void initState() {
    super.initState();
    _emailController.addListener(_validateForm);
    _passwordController.addListener(_validateForm);
  }

  void _validateForm() {
    final email = _emailController.text.trim();
    final password = _passwordController.text.trim();
    final isValid = email.contains('@') && password.isNotEmpty;

    setState(() {
      isButtonDisabled = !isValid;
    });
  }

  void _handleLogin() {
    // TODO: Gọi API đăng nhập tại đây
    print('Login with: ${_emailController.text} / ${_passwordController.text}');
    Navigator.pushReplacementNamed(
      context,
      '/main',
    ); // Hoặc thay bằng route khác nếu có
  }

  void _navigateToForgotPassword() {
    // TODO: Điều hướng tới màn forgot password
    print('Navigate to forgot password screen');
  }

  void _navigateToSignup() {
    // TODO: Điều hướng tới màn đăng ký
    print('Navigate to signup screen');
  }

  void _continueAsGuest() {
    print('Navigate to home as a guest');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: Column(
            children: [
              const SizedBox(height: 75),
              Center(
                child: Image.asset(
                  'assets/images/text-logo.png',
                  width: 250,
                  height: 150,
                ),
              ),
              const SizedBox(height: 30),
              const Text(
                'Login',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 21),
              TextField(
                controller: _emailController,
                decoration: const InputDecoration(
                  labelText: 'Email',
                  prefixIcon: Icon(Icons.email_outlined),
                  border: OutlineInputBorder(),
                ),
                keyboardType: TextInputType.emailAddress,
              ),
              const SizedBox(height: 16),
              TextField(
                controller: _passwordController,
                decoration: const InputDecoration(
                  labelText: 'Password',
                  prefixIcon: Icon(Icons.lock_outline),
                  border: OutlineInputBorder(),
                ),
                obscureText: true,
              ),
              const SizedBox(height: 10),
              Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  TextButton(
                    onPressed: _navigateToForgotPassword,
                    child: const Text('Forgot Password?'),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: isButtonDisabled ? null : _handleLogin,
                  child: const Text('LOGIN'),
                ),
              ),
              const SizedBox(height: 16),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text(
                    "Don't have an account?",
                    style: TextStyle(fontSize: 16, color: Colors.grey),
                  ),
                  TextButton(
                    onPressed: _navigateToSignup,
                    child: const Text(
                      'Sign up',
                      style: TextStyle(fontSize: 16),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 30),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text(
                    'Continue as a guest?',
                    style: TextStyle(fontSize: 14, color: Colors.grey),
                  ),
                  TextButton(
                    onPressed: _continueAsGuest,
                    child: const Text(
                      'Go to Home',
                      style: TextStyle(
                        fontSize: 14,
                        color: Color(0xFF007AFF),
                        decoration: TextDecoration.underline,
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 30),
            ],
          ),
        ),
      ),
    );
  }
}
