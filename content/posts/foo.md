+++
title = 'Foo'
date = 2025-02-08T15:26:20-06:00
draft = false
+++



A Test!

```Terraform
# My Awesome Load Balancer Here!
resource "aws_lb" "web" {
    name = "my-awesome-lb"
    foo = "${var.foo}-${var.wee}"
}
```

Can we get one of `these things`?

If I do this `echo "foo" >> bar.txt"`
