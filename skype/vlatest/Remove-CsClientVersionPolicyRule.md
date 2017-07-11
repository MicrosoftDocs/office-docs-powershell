---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsClientVersionPolicyRule

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes one or more client version policy rules configured for use in your organization.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes one or more client version policy rules configured for use in your organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsClientVersionPolicyRule [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Client version rules are used to determine which client applications are allowed to log on to Microsoft Lync Server 2010.
When a user attempts to log on to Lync Server 2010, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information is then checked against a collection of client version rules to see if any rules apply to that particular application.
For example, suppose a user attempts to log on by using Microsoft Office Communicator 2007 R2.
Before the user can log on, the system will check to see if there is a client version rule that applies to Office Communicator 2007 R2.
If such a rule exists, Lync Server 2010 will then take the action specified by the rule.
That action must be one of the following:

Allow.
The user will be allowed to log on.

AllowAndUpgrade.
The user will be allowed to log on, and his or her copy of Communicator 2007 R2 will automatically be upgraded to the latest version of Lync.
Upgrades are carried out using either Microsoft Update or Windows Server Update Services, depending on how you have configured your system.

AllowWithUrl.
The user will be allowed to log on, and a message will be displayed pointing the user to a URL where the latest version of Lync can be downloaded and installed.
The URL must point to a website that you have created yourself; no such site is created for you when you install Lync Server.

Block.
The user will not be allowed to log on.

BlockAndUpgrade.
The user will not be allowed to log on, but his or her copy of Communicator 2007 R2 will automatically be upgraded to the latest version of Lync.
The user can then try to log on by using the new client application.
Upgrades are carried out using either Microsoft Update or Windows Server Update Services, depending on how you have configured your system.

BlockWithUrl.
The user will not be allowed to log on, but a message will be displayed pointing him or her to a URL where the latest version of Lync can be downloaded and installed.
The URL must point to a website that you have created yourself; no such site is created for you when you install Lync Server.

Client version rules are collected in client version policies, which can be configured at the global scope, the site scope, the service scope (Registrar service), or the per-user scope.
The Remove-CsClientVersionPolicyRule cmdlet enables you to delete one or more of the client policy rules configured for use in your organization.
These rules can be deleted from any of your client version policies, including the global policy.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsClientVersionPolicyRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsClientVersionPolicyRule"}

Below Content Applies To: Lync Server 2013

Client version rules are used to determine which client applications are allowed to log on to Lync Server.
When a user attempts to log on to Lync Server, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information is then checked against a collection of client version rules to see if any rules apply to that particular application.
For example, suppose a user attempts to log on by using Microsoft Office Communicator 2007 R2.
Before the user can log on, the system will check to see if there is a client version rule that applies to Office Communicator 2007 R2.
If such a rule exists, Lync Server will then take the action specified by the rule.
That action must be one of the following:

Allow.
The user will be allowed to log on.

AllowAndUpgrade.
The user will be allowed to log on, and his or her copy of Communicator 2007 R2 will automatically be upgraded to the latest version of Lync.
Upgrades are carried out using either Microsoft Update or Windows Server Update Services, depending on how you have configured your system.

AllowWithUrl.
The user will be allowed to log on, and a message will be displayed pointing the user to a URL where the latest version of Lync can be downloaded and installed.
The URL must point to a website that you have created yourself; no such site is created for you when you install Lync Server.

Block.
The user will not be allowed to log on.

BlockAndUpgrade.
The user will not be allowed to log on, but his or her copy of Communicator 2007 R2 will automatically be upgraded to the latest version of Lync.
The user can then try to log on by using the new client application.
Upgrades are carried out using either Microsoft Update or Windows Server Update Services, depending on how you have configured your system.

BlockWithUrl.
The user will not be allowed to log on, but a message will be displayed pointing him or her to a URL where the latest version of Lync can be downloaded and installed.
The URL must point to a website that you have created yourself; no such site is created for you when you install Lync Server.

Client version rules are collected in client version policies, which can be configured at the global scope, the site scope, the service scope (Registrar service), or the per-user scope.
The Remove-CsClientVersionPolicyRule cmdlet enables you to delete one or more of the client policy rules configured for use in your organization.
These rules can be deleted from any of your client version policies, including the global policy.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsClientVersionPolicyRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsClientVersionPolicyRule"}

Below Content Applies To: Skype for Business Server 2015

Client version rules are used to determine which client applications are allowed to log on to Skype for Business Server 2015.
When a user attempts to log on to Skype for Business Server 2015, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information is then checked against a collection of client version rules to see if any rules apply to that particular application.
For example, suppose a user attempts to log on by using Microsoft Office Communicator 2007 R2.
Before the user can log on, the system will check to see if there is a client version rule that applies to Office Communicator 2007 R2.
If such a rule exists, Skype for Business Server 2015 will then take the action specified by the rule.
That action must be one of the following:

Allow.
The user will be allowed to log on.

AllowAndUpgrade.
The user will be allowed to log on, and his or her copy of Communicator 2007 R2 will automatically be upgraded to the latest version of Lync.
Upgrades are carried out using either Microsoft Update or Windows Server Update Services, depending on how you have configured your system.

AllowWithUrl.
The user will be allowed to log on, and a message will be displayed pointing the user to a URL where the latest version of Lync can be downloaded and installed.
The URL must point to a website that you have created yourself; no such site is created for you when you install Skype for Business Server 2015.

Block.
The user will not be allowed to log on.

BlockAndUpgrade.
The user will not be allowed to log on, but his or her copy of Communicator 2007 R2 will automatically be upgraded to the latest version of Lync.
The user can then try to log on by using the new client application.
Upgrades are carried out using either Microsoft Update or Windows Server Update Services, depending on how you have configured your system.

BlockWithUrl.
The user will not be allowed to log on, but a message will be displayed pointing him or her to a URL where the latest version of Lync can be downloaded and installed.
The URL must point to a website that you have created yourself; no such site is created for you when you install Skype for Business Server 2015.

Client version rules are collected in client version policies, which can be configured at the global scope, the site scope, the service scope (Registrar service), or the per-user scope.
The Remove-CsClientVersionPolicyRule cmdlet enables you to delete one or more of the client policy rules configured for use in your organization.
These rules can be deleted from any of your client version policies, including the global policy.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsClientVersionPolicyRule -Identity site:Redmond/74ba9211-8610-42f9-91ba-846cdee98820
```

The command shown in Example 1 deletes the client version policy rule that has the Identity site:Redmond/74ba9211-8610-42f9-91ba-846cdee98820.
Because Identities must be unique, this command will only delete, at most, a single rule.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 deletes the client version policy rule that has the Identity site:Redmond/74ba9211-8610-42f9-91ba-846cdee98820.
Because Identities must be unique, this command will only delete, at most, a single rule.

Remove-CsClientVersionPolicyRule -Identity site:Redmond/74ba9211-8610-42f9-91ba-846cdee98820

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 deletes the client version policy rule that has the Identity site:Redmond/74ba9211-8610-42f9-91ba-846cdee98820.
Because Identities must be unique, this command will only delete, at most, a single rule.

Remove-CsClientVersionPolicyRule -Identity site:Redmond/74ba9211-8610-42f9-91ba-846cdee98820

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsClientVersionPolicyRule -Filter "site:Redmond/*" | Remove-CsClientVersionPolicyRule
```

The preceding command deletes all the client version policy rules that have been configured for the Redmond site.
To do this, the command first calls Get-CsClientVersionPolicyRule along with the Filter parameter; the filter value "site:Redmond/*" limits the returned data to policy rules that have an Identity that begins with the string value "site:Redmond/".
This filtered collection is then piped to Remove-CsClientVersionPolicyRule, which deletes each item in that collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 deletes all the client version policy rules that have been configured for the Redmond site.
To do this, the command first calls Get-CsClientVersionPolicyRule along with the Filter parameter; the filter value "site:Redmond/*" limits the returned data to policy rules that have an Identity that begins with the string value "site:Redmond/".
This filtered collection is then piped to Remove-CsClientVersionPolicyRule, which deletes each item in that collection.

Get-CsClientVersionPolicyRule -Filter "site:Redmond/*" | Remove-CsClientVersionPolicyRule

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 deletes all the client version policy rules that have been configured for the Redmond site.
To do this, the command first calls the Get-CsClientVersionPolicyRule cmdlet along with the Filter parameter; the filter value "site:Redmond/*" limits the returned data to policy rules that have an Identity that begins with the string value "site:Redmond/".
This filtered collection is then piped to the Remove-CsClientVersionPolicyRule cmdlet, which deletes each item in that collection.

Get-CsClientVersionPolicyRule -Filter "site:Redmond/*" | Remove-CsClientVersionPolicyRule

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsClientVersionPolicyRule | Where-Object {$_.Enabled -eq $False} | Remove-CsClientVersionPolicyRule
```

Example 3 deletes all the client version policy rules that are currently disabled.
To do this, the command first calls Get-CsClientVersionPolicyRule without any parameters in order to return a collection of all the policy rules currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out all the rules where the Enabled property is equal to False.
The filtered collection is then piped to Remove-CsClientVersionPolicyRule, which deletes each item in that collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes all the client version policy rules that are currently disabled.
To do this, the command first calls Get-CsClientVersionPolicyRule without any parameters in order to return a collection of all the policy rules currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out all the rules where the Enabled property is equal to False.
The filtered collection is then piped to Remove-CsClientVersionPolicyRule, which deletes each item in that collection.

Get-CsClientVersionPolicyRule | Where-Object {$_.Enabled -eq $False} | Remove-CsClientVersionPolicyRule

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes all the client version policy rules that are currently disabled.
To do this, the command first calls the Get-CsClientVersionPolicyRule cmdlet without any parameters in order to return a collection of all the policy rules currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out all the rules where the Enabled property is equal to False.
The filtered collection is then piped to the Remove-CsClientVersionPolicyRule cmdlet, which deletes each item in that collection.

Get-CsClientVersionPolicyRule | Where-Object {$_.Enabled -eq $False} | Remove-CsClientVersionPolicyRule

## PARAMETERS

### -Identity
Unique identifier for the client version policy rule to be removed.
The Identity of a client version rule consists of the scope where the rule has been configured plus a globally unique identifier (GUID).
That means that a rule will have an Identity similar to this: site:Redmond/1987d3c2-4544-489d-bbe3-59f79f530a83.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the client version policy rule is being removed.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.Rule object.
Remove-CsClientVersionPolicyRule accepts pipelined instances of the client version rule object.

###  
Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.Rule object.
The Remove-CsClientVersionPolicyRule cmdlet accepts pipelined instances of the client version rule object.

## OUTPUTS

###  
None.
Instead, Remove-CsClientVersionPolicyRule deletes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.Rule object.

###  
None.
Instead, the Remove-CsClientVersionPolicyRule cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.Rule object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/71a107c9-5499-460f-b4b8-08b368be9321(OCS.14).aspx)

[Get-CsClientVersionPolicyRule]()

[New-CsClientVersionPolicyRule]()

[Set-CsClientVersionPolicyRule]()

[Online Version](http://technet.microsoft.com/EN-US/library/71a107c9-5499-460f-b4b8-08b368be9321(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/71a107c9-5499-460f-b4b8-08b368be9321(OCS.16).aspx)

