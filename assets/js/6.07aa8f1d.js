(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{214:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"create-k8s-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-k8s-cluster"}},[s._v("#")]),s._v(" Create k8s cluster")]),s._v(" "),a("p",[s._v("Before starting with the main content, it's necessary to provision\nthe Kubernetes in AWS.")]),s._v(" "),a("p",[s._v("Use the "),a("code",[s._v("MY_DOMAIN")]),s._v(" variable containing domain and "),a("code",[s._v("LETSENCRYPT_ENVIRONMENT")]),s._v("\nvariable.\nThe "),a("code",[s._v("LETSENCRYPT_ENVIRONMENT")]),s._v(" variable should be one of:")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("staging")]),s._v(" - Let’s Encrypt will create testing certificate (not valid)")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("production")]),s._v(" - Let’s Encrypt will create valid certificate (use with care)")])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MY_DOMAIN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("mylabs.dev}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LETSENCRYPT_ENVIRONMENT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LETSENCRYPT_ENVIRONMENT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("staging}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LETSENCRYPT_ENVIRONMENT}")]),s._v('"')]),s._v("\n")])])]),a("h2",{attrs:{id:"prepare-the-local-working-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-local-working-environment"}},[s._v("#")]),s._v(" Prepare the local working environment")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("You can skip these steps if you have all the required software already\ninstalled.")])]),s._v(" "),a("p",[s._v("Install necessary software:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -x /usr/bin/apt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update -qq\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEBIAN_FRONTEND")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("noninteractive "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y -qq awscli "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" gettext-base "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" jq openssh-client "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[s._v("Install "),a("a",{attrs:{href:"https://github.com/kubernetes/kubectl",target:"_blank",rel:"noopener noreferrer"}},[s._v("kubectl"),a("OutboundLink")],1),s._v(" binary:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -x /usr/local/bin/kubectl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s -Lo /usr/local/bin/kubectl https://storage.googleapis.com/kubernetes-release/release/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s https://storage.googleapis.com/kubernetes-release/release/stable.txt"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/bin/linux/amd64/kubectl\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+x /usr/local/bin/kubectl\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[s._v("Install "),a("a",{attrs:{href:"https://github.com/kubernetes/kops",target:"_blank",rel:"noopener noreferrer"}},[s._v("kops"),a("OutboundLink")],1),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -x /usr/local/bin/kops "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s -L "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/kubernetes/kops/releases/download/1.14.0-alpha.3/kops-linux-amd64"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/local/bin/kops\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+x /usr/local/bin/kops\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[s._v("Install "),a("a",{attrs:{href:"https://hub.github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("hub"),a("OutboundLink")],1),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -x /usr/local/bin/hub "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s -L https://github.com/github/hub/releases/download/v2.12.3/hub-linux-amd64-2.12.3.tgz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xzf - -C /tmp/\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /tmp/hub-linux-amd64-2.12.3/bin/hub /usr/local/bin/\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("h2",{attrs:{id:"configure-aws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-aws"}},[s._v("#")]),s._v(" Configure AWS")]),s._v(" "),a("p",[s._v("Authorize to AWS using AWS CLI: "),a("a",{attrs:{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("aws configure\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("p",[s._v("Create DNS zone:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("aws route53 create-hosted-zone --name "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v(" --caller-reference "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v("\n")])])]),a("p",[s._v("Use your domain registrar to change the nameservers for your zone (for example\n"),a("code",[s._v("mylabs.dev")]),s._v(") to use the Amazon Route 53 nameservers. Here is the way how you\ncan find out the the Route 53 nameservers:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("aws route53 get-hosted-zone --id "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("aws route53 list-hosted-zones --query "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HostedZones[?Name==\\'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MY_DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('].Id"')]),s._v(" --output text"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" --query "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DelegationSet.NameServers"')]),s._v("\n")])])]),a("p",[s._v("Create policy allowing the cert-manager to change Route 53 settings. This will\nallow cert-manager to generate wildcard SSL certificates by Let's Encrypt\ncertificate authority.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("aws iam create-policy "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --policy-name "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-AmazonRoute53Domains-cert-manager "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --description "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Policy required by cert-manager to be able to modify Route 53 when generating wildcard certificates using Lets Encrypt"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --policy-document file://files/route_53_change_policy.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq\n")])])]),a("p",[s._v("Output:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Policy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"PolicyName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pruzicka-AmazonRoute53Domains-cert-manager"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"PolicyId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ANPA36ZNO4Q4CRKTWCFKO"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Arn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"arn:aws:iam::822044714040:policy/pruzicka-AmazonRoute53Domains-cert-manager"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"DefaultVersionId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"AttachmentCount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"IsAttachable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"CreateDate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-08-29T07:32:23Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"UpdateDate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-08-29T07:32:23Z"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Create user which will use the policy above allowing the cert-manager to change\nRoute 53 settings:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("aws iam create-user --user-name "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-route53 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("POLICY_ARN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("aws iam list-policies --query "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Policies[?PolicyName==\\'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("-AmazonRoute53Domains-cert-manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('].{ARN:Arn}"')]),s._v(" --output text"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\naws iam attach-user-policy --user-name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v('-route53"')]),s._v(" --policy-arn "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$POLICY_ARN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\naws iam create-access-key --user-name "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-route53 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.aws/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-route53-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROUTE53_AWS_ACCESS_KEY_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v("/AccessKeyId/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" print "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("$4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('" '),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.aws/$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("-route53-$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MY_DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROUTE53_AWS_SECRET_ACCESS_KEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v("/SecretAccessKey/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" print "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("$4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('" '),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.aws/$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("-route53-$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MY_DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])]),a("p",[s._v("Output:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"User"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"UserName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pruzicka-route53"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"UserId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AIDA36ZNO4Q4BBTGNN42U"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Arn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"arn:aws:iam::822044714040:user/pruzicka-route53"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"CreateDate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-08-29T07:32:25Z"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("The "),a("code",[s._v("AccessKeyId")]),s._v(" and "),a("code",[s._v("SecretAccessKey")]),s._v(" is need for creating the "),a("code",[s._v("ClusterIssuer")]),s._v("\ndefinition for "),a("code",[s._v("cert-manager")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"create-k8s-in-aws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-k8s-in-aws"}},[s._v("#")]),s._v(" Create K8s in AWS")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/aws-samples/eks-workshop/65b766c494a5b4f5420b2912d8373c4957163541/static/images/3-service-animated.gif",alt:"Architecture",title:"Architecture"}})]),s._v(" "),a("p",[s._v("Generate SSH keys if not exists:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.ssh/id_rsa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -m 0700 -d "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.ssh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ssh-keygen -b "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" -t rsa -f "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.ssh/id_rsa -q -N "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("Clone the "),a("code",[s._v("k8s-flux-istio-gitlab-harbor")]),s._v(" Git repository if it wasn't done already:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -d .git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone --quiet https://github.com/ruzickap/k8s-flux-istio-gitlab-harbor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" k8s-flux-istio-gitlab-harbor\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[s._v("Create S3 bucket where the kops will store cluster status:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("aws s3api create-bucket --bucket "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-kops-k8s --region eu-central-1 --create-bucket-configuration "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LocationConstraint")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eu-central-1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq\n")])])]),a("p",[s._v("Output:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Location"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://pruzicka-kops-k8s.s3.amazonaws.com/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Create Kubernetes cluster in AWS by using "),a("a",{attrs:{href:"https://github.com/kubernetes/kops",target:"_blank",rel:"noopener noreferrer"}},[s._v("kops"),a("OutboundLink")],1),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kops create cluster "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-k8s."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --state"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s3://"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-kops-k8s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --zones"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eu-central-1a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --node-count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --node-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t3.large "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --node-volume-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --master-count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --master-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t3.small "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --master-volume-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --dns-zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --cloud-labels "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Owner='),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v(',Environment=Test,Division=Services"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --ssh-public-key "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.ssh/id_rsa.pub "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --yes\n")])])]),a("p",[s._v("Output:")]),s._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("...\nI0829 09:32:53.961790    4154 dns.go:153] Pre-creating DNS records\nI0829 09:32:55.037438    4154 update_cluster.go:291] Exporting kubecfg for cluster\nkops has set your kubectl context to pruzicka-k8s.mylabs.dev\n\nCluster changes have been applied to the cloud.\n\n\nChanges may require instances to restart: kops rolling-update cluster\n")])])]),a("p",[s._v("Wait for cluster to be up and running:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("kops validate cluster --state"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s3://$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("-kops-k8s -o yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -q failures"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n")])])]),a("p",[s._v("Store "),a("code",[s._v("kubeconfig")]),s._v(" in current directory:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kops "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" kubecfg "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-k8s."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v(" --state"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s3://"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-kops-k8s --kubeconfig kubeconfig.conf\n")])])]),a("p",[s._v("Output:")]),s._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kops has set your kubectl context to pruzicka-k8s.mylabs.dev\n")])])]),a("p",[s._v("Check if the new Kubernetes cluster is available:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBECONFIG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/kubeconfig.conf\nkubectl get nodes -o wide\n")])])]),a("p",[s._v("Output:")]),s._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("NAME                                             STATUS   ROLES    AGE   VERSION   INTERNAL-IP     EXTERNAL-IP     OS-IMAGE                       KERNEL-VERSION   CONTAINER-RUNTIME\nip-172-20-51-30.eu-central-1.compute.internal    Ready    node     25s   v1.14.6   172.20.51.30    18.197.69.215   Debian GNU/Linux 9 (stretch)   4.9.0-9-amd64    docker://18.6.3\nip-172-20-56-172.eu-central-1.compute.internal   Ready    node     27s   v1.14.6   172.20.56.172   18.194.44.246   Debian GNU/Linux 9 (stretch)   4.9.0-9-amd64    docker://18.6.3\nip-172-20-57-146.eu-central-1.compute.internal   Ready    node     24s   v1.14.6   172.20.57.146   18.185.188.31   Debian GNU/Linux 9 (stretch)   4.9.0-9-amd64    docker://18.6.3\nip-172-20-58-112.eu-central-1.compute.internal   Ready    master   72s   v1.14.6   172.20.58.112   18.194.242.59   Debian GNU/Linux 9 (stretch)   4.9.0-9-amd64    docker://18.6.3\nip-172-20-58-28.eu-central-1.compute.internal    Ready    node     16s   v1.14.6   172.20.58.28    3.120.175.151   Debian GNU/Linux 9 (stretch)   4.9.0-9-amd64    docker://18.6.3\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -d tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" tmp\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LETSENCRYPT_ENVIRONMENT}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"staging"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("EXTERNAL_IP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl get nodes --output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jsonpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{.items[*].status.addresses[?(@.type=='),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("ExternalIP"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(')].address}"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -q -o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("StrictHostKeyChecking")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no -l admin "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${EXTERNAL_IP}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sudo mkdir -p /etc/docker/certs.d/harbor.'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v("/ && sudo wget -q https://letsencrypt.org/certs/fakelerootx1.pem -O /etc/docker/certs.d/harbor."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v('/ca.crt"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*** Done"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);