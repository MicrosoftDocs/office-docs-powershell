---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsClientVersionPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies an existing client version policy.
Client version policies enable you to specify which clients (such as Microsoft Office Communicator 2007 R2) will be allowed to log on to your Microsoft Lync Server 2010 system.

**Below Content Applies To:** Lync Server 2013

Modifies an existing client version policy.
Client version policies enable you to specify which clients (such as Microsoft Office Communicator 2007 R2) will be allowed to log on to your Lync Server system.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Modifies an existing client version policy.
Client version policies enable you to specify which clients (such as Microsoft Office Communicator 2007 R2) will be allowed to log on to your Skype for Business Server 2015 system.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsClientVersionPolicy [[-Identity] <XdsIdentity>] [-Description <String>] [-Rules <PSListModifier>]
 [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>] [<CommonParameters>]
```

### Instance
```
Set-CsClientVersionPolicy [-Instance <PSObject>] [-Description <String>] [-Rules <PSListModifier>] [-Force]
 [-WhatIf] [-Confirm] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Client version policies represent a collection of client version rules; in turn, client version rules are used to determine which client applications are allowed to log on to Lync Server 2010.
When a user attempts to log on to Lync Server 2010, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information included in the SIP header is then checked against a collection of client version rules to see if any rules apply to that particular application.
If such a rule exists, Lync Server 2010 Server will then take the action specified by the rule.
For example, the rule might tell Lync Server 2010 to allow the logon, to block it, or to allow the logon but then silently upgrade the client application to the latest version (for example, upgrade Communicator 2007 R2 to Microsoft Lync 2010).

Client version policies, which can be applied at the global scope, the site scope, the service scope (Registrar service only), or the per-user scope, give you flexibility in determining which client applications can be used to access the system.
For example, you might want to prevent users from logging on to Lync Server 2010 by using Communicator 2007 R2; that's because it does not support the same features and capabilities as Lync 2010.
However, due to hardware or software conflicts you might also have a group of users who cannot upgrade to Lync 2010.
In that case, you can create a separate rule -- and a separate client version policy -- that allows those users to log on from within Communicator 2007 R2.

Client version policies can be modified at any time; modifying a client version policy typically means adding new rules, deleting existing rules, or modifying the properties of an existing rule (for example, changing a rule action from Allow to Block).
These changes can be made by using the Set-CsClientVersionPolicy cmdlet.
However, you will probably find it easier to make these modifications by using the CsClientVersionPolicyRule cmdlet.

On the other hand, Set-CsClientVersionPolicy does provide a way for you to easily copy an entire set of rules from one client version policy to another.
For details, see the Examples section in this Help topic.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsClientVersionPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsClientVersionPolicy\b"}

**Below Content Applies To:** Lync Server 2013

Client version policies represent a collection of client version rules; in turn, client version rules are used to determine which client applications are allowed to log on to Lync Server.
When a user attempts to log on to Lync Server, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information included in the SIP header is then checked against a collection of client version rules to see if any rules apply to that particular application.
If such a rule exists, Lync Server will then take the action specified by the rule.
For example, the rule might tell Lync Server to allow the logon, to block it, or to allow the logon but then silently upgrade the client application to the latest version (for example, upgrade Communicator 2007 R2 to Microsoft Lync 2013 Preview).

Client version policies, which can be applied at the global scope, the site scope, the service scope (Registrar service only), or the per-user scope, give you flexibility in determining which client applications can be used to access the system.
For example, you might want to prevent users from logging on to Lync Server by using Communicator 2007 R2; that's because it does not support the same features and capabilities as Lync.
However, due to hardware or software conflicts you might also have a group of users who cannot upgrade to Lync.
In that case, you can create a separate rule -- and a separate client version policy -- that allows those users to log on from within Communicator 2007 R2.

Client version policies can be modified at any time; modifying a client version policy typically means adding new rules, deleting existing rules, or modifying the properties of an existing rule (for example, changing a rule action from Allow to Block).
These changes can be made by using the Set-CsClientVersionPolicy cmdlet.
However, you will probably find it easier to make these modifications by using the CsClientVersionPolicyRule cmdlet.

On the other hand, Set-CsClientVersionPolicy does provide a way for you to easily copy an entire set of rules from one client version policy to another.
For details, see the Examples section in this Help topic.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsClientVersionPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsClientVersionPolicy\b"}

**Below Content Applies To:** Skype for Business Server 2015

Client version policies represent a collection of client version rules; in turn, client version rules are used to determine which client applications are allowed to log on to Skype for Business Server 2015.
When a user attempts to log on to Skype for Business Server 2015, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information included in the SIP header is then checked against a collection of client version rules to see if any rules apply to that particular application.
If such a rule exists, Skype for Business Server 2015 will then take the action specified by the rule.
For example, the rule might tell Skype for Business Server 2015 to allow the logon, to block it, or to allow the logon but then silently upgrade the client application to the latest version (for example, upgrade Communicator 2007 R2 to Skype for Business).

Client version policies, which can be applied at the global scope, the site scope, the service scope (Registrar service only), or the per-user scope, give you flexibility in determining which client applications can be used to access the system.
For example, you might want to prevent users from logging on to Skype for Business Server 2015 by using Communicator 2007 R2; that's because it does not support the same features and capabilities as Skype for Business.
However, due to hardware or software conflicts you might also have a group of users who cannot upgrade to Skype for Business.
In that case, you can create a separate rule -- and a separate client version policy -- that allows those users to log on from within Communicator 2007 R2.

Client version policies can be modified at any time; modifying a client version policy typically means adding new rules, deleting existing rules, or modifying the properties of an existing rule (for example, changing a rule action from Allow to Block).
These changes can be made by using the Set-CsClientVersionPolicy cmdlet.
However, you will probably find it easier to make these modifications by using the CsClientVersionPolicyRule cmdlet.

On the other hand, the Set-CsClientVersionPolicy cmdlet does provide a way for you to easily copy an entire set of rules from one client version policy to another.
For details, see the Examples section in this Help topic.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsClientVersionPolicy -Identity site:Redmond -Rules $Null

$x = Get-CsClientVersionPolicy -Identity site:Dublin | Select-Object -ExpandProperty Rules

Set-CsClientVersionPolicy -Identity site:Redmond -Rules $x
```

The commands shown in Example 1 copy all the client version rules from one client version policy to another.
To do this, the first command in the example uses Set-CsClientVersionPolicy to remove all the rules from the policy site:Redmond; this is done by setting the value of the Rules property to null.
After the rules have been deleted, the second command in the example uses Get-CsClientVersionPolicy to retrieve all the client version policy rules configured for the site:Dublin policy.
These rules are stored in a variable named $x.

In the final command, Set-CsClientVersionPolicy is invoked again, this time setting the Rules property of the Redmond policy to $x.
This effectively copies all the rules from the site:Dublin policy and adds them to the site:Redmond policy.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 copy all the client version rules from one client version policy to another.
To do this, the first command in the example uses Set-CsClientVersionPolicy to remove all the rules from the policy site:Redmond; this is done by setting the value of the Rules property to null.
After the rules have been deleted, the second command in the example uses Get-CsClientVersionPolicy to retrieve all the client version policy rules configured for the site:Dublin policy.
These rules are stored in a variable named $x.

In the final command, Set-CsClientVersionPolicy is invoked again, this time setting the Rules property of the Redmond policy to $x.
This effectively copies all the rules from the site:Dublin policy and adds them to the site:Redmond policy.

Set-CsClientVersionPolicy -Identity site:Redmond -Rules $Null

$x = Get-CsClientVersionPolicy -Identity site:Dublin | Select-Object -ExpandProperty Rules

Set-CsClientVersionPolicy -Identity site:Redmond -Rules $x

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 copy all the client version rules from one client version policy to another.
To do this, the first command in the example uses the Set-CsClientVersionPolicy cmdlet to remove all the rules from the policy site:Redmond; this is done by setting the value of the Rules property to null.
After the rules have been deleted, the second command in the example uses the Get-CsClientVersionPolicy cmdlet to retrieve all the client version policy rules configured for the site:Dublin policy.
These rules are stored in a variable named $x.

In the final command, the Set-CsClientVersionPolicy cmdlet is invoked again, this time setting the Rules property of the Redmond policy to $x.
This effectively copies all the rules from the site:Dublin policy and adds them to the site:Redmond policy.

Set-CsClientVersionPolicy -Identity site:Redmond -Rules $Null

$x = Get-CsClientVersionPolicy -Identity site:Dublin | Select-Object -ExpandProperty Rules

Set-CsClientVersionPolicy -Identity site:Redmond -Rules $x

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

Unique identifier for the policy to be modified.
To modify the global policy, use this syntax: -Identity global.
To modify a policy configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To modify a policy configured at the service  scope, use syntax similar to this: -Identity "Registrar:atl-cs-001.litwareinc.com".
The Registrar service is the only service that can host a client version policy.

Per-user policies can also be modified by using this cmdlet.
To modify a per-user policy, use syntax similar to this: -Identity "SalesDepartmentPolicy".

If this parameter is not included, then Set-CsClientVersionPolicy will modify the global policy.



**Below Content Applies To:** Lync Server 2013

Unique identifier for the policy to be modified.
To modify the global policy, use this syntax: -Identity global.
To modify a policy configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To modify a policy configured at the service scope, use syntax similar to this: -Identity "Registrar:atl-cs-001.litwareinc.com".
The Registrar service is the only service that can host a client version policy.

Per-user policies can also be modified by using this cmdlet.
To modify a per-user policy, use syntax similar to this: -Identity "SalesDepartmentPolicy".

If this parameter is not included, then Set-CsClientVersionPolicy will modify the global policy.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the policy to be modified.
To modify the global policy, use this syntax: -Identity global.
To modify a policy configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To modify a policy configured at the service scope, use syntax similar to this: -Identity "Registrar:atl-cs-001.litwareinc.com".
The Registrar service is the only service that can host a client version policy.

Per-user policies can also be modified by using this cmdlet.
To modify a per-user policy, use syntax similar to this: -Identity "SalesDepartmentPolicy".

If this parameter is not included, then the Set-CsClientVersionPolicy cmdlet will modify the global policy.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Description
Enables you to provide explanatory information about a policy.
For example, you might provide information describing the users that the policy should be assigned to.

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
Collection of individual client policy rules that have been assigned to the policy.

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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the client version policy is being modified.
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
Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionPolicy object.
Remove-CsClientVersionPolicy accepts pipelined instances of the client version policy object.

###  
Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionPolicy object.
The Set-CsClientVersionPolicy cmdlet accepts pipelined instances of the client version policy object.

## OUTPUTS

###  
Set-CsClientVersionPolicy does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionPolicy object.

###  
The Set-CsClientVersionPolicy cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionPolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/cf7c1a6c-b8a9-4609-97f4-6c8ef9e45be7(OCS.14).aspx)

[Get-CsClientVersionPolicy]()

[New-CsClientVersionPolicy]()

[Remove-CsClientVersionPolicy]()

[Set-CsClientVersionPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/cf7c1a6c-b8a9-4609-97f4-6c8ef9e45be7(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/cf7c1a6c-b8a9-4609-97f4-6c8ef9e45be7(OCS.16).aspx)

