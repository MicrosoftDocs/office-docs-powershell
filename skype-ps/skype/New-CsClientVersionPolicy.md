---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsClientVersionPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new client version policy.
Client version policies enable you to specify which versions of clients (such as Microsoft Office Communicator 2007 R2) will be able to log on to your Microsoft Lync Server 2010 system.

**Below Content Applies To:** Lync Server 2013

Creates a new client version policy.
Client version policies enable you to specify which versions of clients (such as Microsoft Office Communicator 2007 R2) will be able to log on to your Lync Server system.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new client version policy.
Client version policies enable you to specify which versions of clients (such as Microsoft Office Communicator 2007 R2) will be able to log on to your Skype for Business Server 2015 system.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsClientVersionPolicy [-Identity] <XdsIdentity> [-Description <String>] [-Rules <PSListModifier>] [-Force]
 [-InMemory] [-WhatIf] [-Confirm] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Client version policies represent a collection of client version rules; in turn, client version rules are used to determine which client applications are allowed to log on to Lync Server 2010.
When a user attempts to log on to Lync Server 2010, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information included in the SIP header is then checked against a collection of client version rules to see if any rules apply to that particular application.
If such a rule exists, Lync Server 2010 will then take the action specified by the rule.
For example, the rule might tell Lync Server 2010 to allow the logon, to block it, or to allow the logon but then silently upgrade the client application to the latest version (for example, upgrade Communicator 2007 R2 to Microsoft Lync 2010).

Client version policies, which can be applied at the global scope, the site scope, the service scope (Registrar service only), or the per-user scope, give you flexibility in determining which client applications can be used to access the system.
For example, as a general rule you might want to prevent users from logging on to Lync Server 2010 by using Communicator 2007 R2; you might want to do that because the older client application does not support the same features and capabilities as Lync 2010.
However, due to hardware or software conflicts, you might also have a group of users who cannot upgrade to Lync 2010.
In that case, you can create a separate rule -- and a separate client version policy -- that allows those users to log on from within Communicator 2007 R2.

New client version policies are created by using the New-CsClientVersionPolicy cmdlet.
These new policies can be created at the site scope, the service scope (Registrar service only), or at the per-user scope.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsClientVersionPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsClientVersionPolicy\b"}

**Below Content Applies To:** Lync Server 2013

Client version policies represent a collection of client version rules; in turn, client version rules are used to determine which client applications are allowed to log on to Lync Server.
When a user attempts to log on to Lync Server, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information included in the SIP header is then checked against a collection of client version rules to see if any rules apply to that particular application.
If such a rule exists, Lync Server will then take the action specified by the rule.
For example, the rule might tell Lync Server to allow the logon, to block it, or to allow the logon but then silently upgrade the client application to the latest version (for example, upgrade Communicator 2007 R2 to Microsoft Lync 2013 Preview).

Client version policies, which can be applied at the global scope, the site scope, the service scope (Registrar service only), or the per-user scope, give you flexibility in determining which client applications can be used to access the system.
For example, as a general rule you might want to prevent users from logging on to Lync Server by using Communicator 2007 R2; you might want to do that because the older client application does not support the same features and capabilities as Lync.
However, due to hardware or software conflicts, you might also have a group of users who cannot upgrade to Lync Server.
In that case, you can create a separate rule -- and a separate client version policy -- that allows those users to log on from within Communicator 2007 R2.

Note, however, that anonymous users are only affected by global policies.
That's because anonymous users are not associated with a site or service, and cannot be assigned a per-user policy.

New client version policies are created by using the New-CsClientVersionPolicy cmdlet.
These new policies can be created at the site scope, the service scope (Registrar service only), or at the per-user scope.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsClientVersionPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsClientVersionPolicy\b"}

**Below Content Applies To:** Skype for Business Server 2015

Client version policies represent a collection of client version rules; in turn, client version rules are used to determine which client applications are allowed to log on to Skype for Business Server 2015.
When a user attempts to log on to Skype for Business Server 2015, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information included in the SIP header is then checked against a collection of client version rules to see if any rules apply to that particular application.
If such a rule exists, Skype for Business Server 2015 will then take the action specified by the rule.
For example, the rule might tell Skype for Business Server 2015 to allow the logon, to block it, or to allow the logon but then silently upgrade the client application to the latest version (for example, upgrade Communicator 2007 R2 to Skype for Business).

Client version policies, which can be applied at the global scope, the site scope, the service scope (Registrar service only), or the per-user scope, give you flexibility in determining which client applications can be used to access the system.
For example, as a general rule you might want to prevent users from logging on to Skype for Business Server 2015 by using Communicator 2007 R2; you might want to do that because the older client application does not support the same features and capabilities as Skype for Business.
However, due to hardware or software conflicts, you might also have a group of users who cannot upgrade to Skype for Business.
In that case, you can create a separate rule -- and a separate client version policy -- that allows those users to log on from within Communicator 2007 R2.

Note, however, that anonymous users are only affected by global policies.
That's because anonymous users are not associated with a site or service, and cannot be assigned a per-user policy.

New client version policies are created by using the New-CsClientVersionPolicy cmdlet.
These new policies can be created at the site scope, the service scope (Registrar service only), or at the per-user scope.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
New-CsClientVersionPolicy -Identity site:Redmond
```

In Example 1, a new client version policy is created for the Redmond site. 
Because no parameters are specified (other than the mandatory Identity parameter), the new policy will contain all of the default values for a client version policy.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, a new client version policy is created for the Redmond site.
Because no parameters are specified (other than the mandatory Identity parameter), the new policy will contain all of the default values for a client version policy.

New-CsClientVersionPolicy -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, a new client version policy is created for the Redmond site.
Because no parameters are specified (other than the mandatory Identity parameter), the new policy will contain all of the default values for a client version policy.

New-CsClientVersionPolicy -Identity site:Redmond

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsSite | Select-Object Identity | ForEach-Object {New-CsClientVersionPolicy -Identity ("site:" + $_.Identity)}
```

The command shown in Example 2 creates a new client version policy for each site in the organization.
To accomplish this task, the command first calls Get-CsSite without any additional parameters; that returns a collection of all the sites in the topology.
This collection of sites is then then piped to the Select-Object cmdlet, which extracts the Identity property for each site.
Those Identities are then piped to ForEach-Object, which takes each site in the collection and creates a new client version policy for that site.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 creates a new client version policy for each site in the organization.
To accomplish this task, the command first calls Get-CsSite without any additional parameters; that returns a collection of all the sites in the topology.
This collection of sites is then then piped to the Select-Object cmdlet, which extracts the Identity property for each site.
Those Identities are then piped to ForEach-Object, which takes each site in the collection and creates a new client version policy for that site.

Get-CsSite | Select-Object Identity | ForEach-Object {New-CsClientVersionPolicy -Identity ("site:" + $_.Identity)}

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 creates a new client version policy for each site in the organization.
To accomplish this task, the command first calls the Get-CsSite cmdlet without any additional parameters; that returns a collection of all the sites in the topology.
This collection of sites is then then piped to the Select-Object cmdlet, which extracts the Identity property for each site.
Those Identities are then piped to the ForEach-Object cmdlet, which takes each site in the collection and creates a new client version policy for that site.

Get-CsSite | Select-Object Identity | ForEach-Object {New-CsClientVersionPolicy -Identity ("site:" + $_.Identity)}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

Unique identifier for the policy to be created.
To create a policy at the site scope, use syntax similar to this: -Identity "site:Redmond".
To create a policy at the service  scope, use syntax similar to this: -Identity "Registrar:atl-cs-001.litwareinc.com".
The Registrar service is the only service that can host a client version policy.

Policies can also be created at the per-user scope.
To create a per-user policy, use syntax similar to this: -Identity "SalesDepartmentPolicy".



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Unique identifier for the policy to be created.
To create a policy at the site scope, use syntax similar to this: -Identity "site:Redmond".
To create a policy at the service scope, use syntax similar to this: -Identity "Registrar:atl-cs-001.litwareinc.com".
The Registrar service is the only service that can host a client version policy.

Policies can also be created at the per-user scope.
To create a per-user policy, use syntax similar to this: -Identity "SalesDepartmentPolicy".



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables you to provide explanatory text about the policy.
For example, you might include information about the users that the policy should be assigned to.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rules
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Collection of client version policy rules.
You can add and remove rules from a policy by using the New-CsClientVersionPolicyRule and the Remove-CsClientVersionPolicyRule cmdlets.
To add a rule at the time you create the new policy, create the rule and store the value in a variable (for example, $x).
You can then use syntax similar to this when creating the new policy:

New-CsClientVersionPolicy -Identity "RedmondClientVersionPolicy" -Rules @{Add=$x}



**Below Content Applies To:** Skype for Business Server 2015

Collection of client version policy rules.
You can add and remove rules from a policy by using the New-CsClientVersionPolicyRule cmdlet and the Remove-CsClientVersionPolicyRule cmdlet.
To add a rule at the time you create the new policy, create the rule and store the value in a variable (for example, $x).
You can then use syntax similar to this when creating the new policy:

New-CsClientVersionPolicy -Identity "RedmondClientVersionPolicy" -Rules @{Add=$x}



```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -InMemory
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new client version policy is being created.
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
None.
Get-CsClientVersionPolicy does not accept pipelined input.

###  
None.
The Get-CsClientVersionPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsClientVersionPolicy creates new instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionPolicy object.

###  
The New-CsClientVersionPolicy cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionPolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/8c95493a-ce18-49eb-937f-7348743fcbb4(OCS.14).aspx)

[Get-CsClientVersionPolicy]()

[Grant-CsClientVersionPolicy]()

[Remove-CsClientVersionPolicy]()

[Set-CsClientVersionPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/8c95493a-ce18-49eb-937f-7348743fcbb4(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/8c95493a-ce18-49eb-937f-7348743fcbb4(OCS.16).aspx)

