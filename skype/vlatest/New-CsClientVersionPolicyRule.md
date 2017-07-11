---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsClientVersionPolicyRule

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new client version policy rule.
Client version policy rules help determine whether users can use a specific client application to log on to Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Creates a new client version policy rule.
Client version policy rules help determine whether users can use a specific client application to log on to Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new client version policy rule.
Client version policy rules help determine whether users can use a specific client application to log on to Skype for Business Server 2015.



## SYNTAX

### Identity
```
New-CsClientVersionPolicyRule [-Identity] <XdsIdentity> [-MajorVersion <UInt16>] [-MinorVersion <UInt16>]
 [-UserAgent <String>] [-Action <Action>] [-ActionUrl <String>] [-BuildNumber <UInt16>]
 [-CompareOp <CompareOp>] [-Description <String>] [-Enabled <Boolean>] [-Priority <Int32>]
 [-QfeNumber <UInt16>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [-UserAgentFullName <String>] [-Tenant <Guid>]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsClientVersionPolicyRule [-MajorVersion <UInt16>] [-MinorVersion <UInt16>] [-UserAgent <String>]
 [-Action <Action>] [-ActionUrl <String>] [-BuildNumber <UInt16>] [-CompareOp <CompareOp>]
 [-Description <String>] [-Enabled <Boolean>] -Parent <String> [-Priority <Int32>] [-QfeNumber <UInt16>]
 -RuleId <String> [-Force] [-InMemory] [-WhatIf] [-Confirm] [-UserAgentFullName <String>] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Client version policy rules are used to determine which client applications are allowed to log on to Lync Server 2010.
When a user attempts to log on to Lync Server 2010, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information is then checked against a collection of client version rules to see if any rules apply to that particular application.
For example, suppose a user attempts to log on by using Microsoft Office Communicator 2007 R2.
Before the user can log on to Lync Server 2010, the system will check to see if there is a client version rule that applies to Office Communicator 2007 R2.
If a rule exists, Lync Server 2010 will then take the action specified by the rule.
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

Client version policy rules are collected in client version policies, policies that can be configured at the global scope, the site scope, the service scope (Registrar service), or the per-user scope.
New client version rules are created by using the New-CsClientVersionPolicyRule cmdlet.
When you create a new rule you must also specify the Identity for that rule; that Identity consists of a scope (for example, site:Redmond) and a globally unique identifier (GUID).
You can either put together an Identity yourself, or provide the scope (the Parent parameter) and the GUID (the RuleId parameter) to have New-CsClientVerisonPolicyRule create the Identity for you.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsClientVersionPolicyRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsClientVersionPolicyRule"}

**Below Content Applies To:** Lync Server 2013

Client version policy rules are used to determine which client applications are allowed to log on to Lync Server.
When a user attempts to log on to Lync Server, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information is then checked against a collection of client version rules to see if any rules apply to that particular application.
For example, suppose a user attempts to log on by using Microsoft Office Communicator 2007 R2.
Before the user can log on to Lync Server, the system will check to see if there is a client version rule that applies to Office Communicator 2007 R2.
If a rule exists, Lync Server will then take the action specified by the rule.
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

Client version policy rules are collected in client version policies, policies that can be configured at the global scope, the site scope, the service scope (Registrar service), or the per-user scope.
New client version rules are created by using the New-CsClientVersionPolicyRule cmdlet.
When you create a new rule you must also specify the Identity for that rule; that Identity consists of a scope (for example, site:Redmond) and a globally unique identifier (GUID).
You can either put together an Identity yourself, or provide the scope (the Parent parameter) and the GUID (the RuleId parameter) to have New-CsClientVerisonPolicyRule create the Identity for you.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsClientVersionPolicyRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsClientVersionPolicyRule"}

**Below Content Applies To:** Skype for Business Server 2015

Client version policy rules are used to determine which client applications are allowed to log on to Skype for Business Server 2015.
When a user attempts to log on to Skype for Business Server 2015, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information is then checked against a collection of client version rules to see if any rules apply to that particular application.
For example, suppose a user attempts to log on by using Microsoft Office Communicator 2007 R2.
Before the user can log on to Skype for Business Server 2015, the system will check to see if there is a client version rule that applies to Office Communicator 2007 R2.
If a rule exists, Skype for Business Server 2015 will then take the action specified by the rule.
That action must be one of the following:

Allow.
The user will be allowed to log on.

AllowAndUpgrade.
The user will be allowed to log on, and his or her copy of Communicator 2007 R2 will automatically be upgraded to the latest version of Skype for Business.
Upgrades are carried out using either Microsoft Update or Windows Server Update Services, depending on how you have configured your system.

AllowWithUrl.
The user will be allowed to log on, and a message will be displayed pointing the user to a URL where the latest version of Skype for Business can be downloaded and installed.
The URL must point to a website that you have created yourself; no such site is created for you when you install Skype for Business Server 2015.

Block.
The user will not be allowed to log on.

BlockAndUpgrade.
The user will not be allowed to log on, but his or her copy of Communicator 2007 R2 will automatically be upgraded to the latest version of Skype for Business.
The user can then try to log on by using the new client application.
Upgrades are carried out using either Microsoft Update or Windows Server Update Services, depending on how you have configured your system.

BlockWithUrl.
The user will not be allowed to log on, but a message will be displayed pointing him or her to a URL where the latest version of Skype for Business can be downloaded and installed.
The URL must point to a website that you have created yourself; no such site is created for you when you install Skype for Business Server 2015.

Client version policy rules are collected in client version policies, policies that can be configured at the global scope, the site scope, the service scope (Registrar service), or the per-user scope.
New client version rules are created by using the New-CsClientVersionPolicyRule cmdlet.
When you create a new rule you must also specify the Identity for that rule; that Identity consists of a scope (for example, site:Redmond) and a globally unique identifier (GUID).
You can either put together an Identity yourself, or provide the scope (the Parent parameter) and the GUID (the RuleId parameter) to have the New-CsClientVerisonPolicyRule cmdlet create the Identity for you.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
$x = [guid]::NewGuid()

New-CsClientVersionPolicyRule -Parent "site:Redmond" -RuleId $x -MajorVersion 4 -UserAgent InHouse
```

Example 1 demonstrates how you can create a new client version policy rule.
Policy rules have Identities that are composed of two parts: the scope where the announcement is to be assigned, and a 36-character GUID.
Creating an Identity for a new client version policy rule first requires you to use the .NET Framework method NewGuid to create a new GUID.
This step is carried out in the first command in the example, with the resulting GUID being stored in the variable $x.

After the GUID has been created, you can then use New-CsClientVersionPolicyRule to create the new rule.
This command uses four parameters: Parent, with a parameter value representing the scope (site:Redmond) for the new rule; RuleId, with the parameter value $x (representing the newly-created GUID); MajorVersion (4); and UserAgent (InHouse).
In this case, the UserAgent parameter represents an in-house client application.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 demonstrates how you can create a new client version policy rule.
Policy rules have Identities that are composed of two parts: the scope where the announcement is to be assigned, and a 36-character GUID.
Creating an Identity for a new client version policy rule first requires you to use the .NET Framework method NewGuid to create a new GUID.
This step is carried out in the first command in the example, with the resulting GUID being stored in the variable $x.

After the GUID has been created, you can then use New-CsClientVersionPolicyRule to create the new rule.
This command uses four parameters: Parent, with a parameter value representing the scope (site:Redmond) for the new rule; RuleId, with the parameter value $x (representing the newly-created GUID); MajorVersion (4); and UserAgent (InHouse).
In this case, the UserAgent parameter represents an in-house client application.

$x = \[guid\]::NewGuid()

New-CsClientVersionPolicyRule -Parent "site:Redmond" -RuleId $x -MajorVersion 4 -UserAgent InHouse

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 demonstrates how you can create a new client version policy rule.
Policy rules have Identities that are composed of two parts: the scope where the announcement is to be assigned, and a 36-character GUID.
Creating an Identity for a new client version policy rule first requires you to use the .NET Framework method NewGuid to create a new GUID.
This step is carried out in the first command in the example, with the resulting GUID being stored in the variable $x.

After the GUID has been created, you can then use the New-CsClientVersionPolicyRule cmdlet to create the new rule.
This command uses four parameters: Parent, with a parameter value representing the scope (site:Redmond) for the new rule; RuleId, with the parameter value $x (representing the newly-created GUID); MajorVersion (4); and UserAgent (InHouse).
In this case, the UserAgent parameter represents an in-house client application.

$x = \[guid\]::NewGuid()

New-CsClientVersionPolicyRule -Parent "site:Redmond" -RuleId $x -MajorVersion 4 -UserAgent InHouse

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
$x = [guid]::NewGuid()

$z = New-CsClientVersionPolicyRule -Parent "site:Redmond" -RuleId $x -InMemory
$z.MajorVersion = 4 
$z.UserAgent = "Inhouse"
Set-CsClientVersionPolicyRule -Instance $z
```

The commands shown in Example 2 represent a variation of the command shown in Example 1: in this case, however, the new rule is initially created in memory only, and only later added to Lync Server 2010.
To carry out this task, the first command in the example creates the GUID portion of the Identity.
In command 2, a new in-memory-only client version policy rule is created; the InMemory parameter ensures that the rule exists only in memory and is not immediately added to the Lync Server 2010 infrastructure.
As in Example 1, the Parent and RuleId parameters are used to specify the scope and GUID for the new rule, the two pieces that make up the rule Identity.

After the virtual rule has been created, the next two commands are used to assign values to the MajorVersion and UserAgent properties, respectively.
When those tasks are complete, the final command in the example and the Set-CsClientVersionPolicyRule cmdlet is used to create the actual client version policy rule and assign the rule to the Redmond site.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 2 represent a variation of the command shown in Example 1: in this case, however, the new rule is initially created in memory only, and only later added to Lync Server.
To carry out this task, the first command in the example creates the GUID portion of the Identity.
In command 2, a new in-memory-only client version policy rule is created; the InMemory parameter ensures that the rule exists only in memory and is not immediately added to the Lync Server infrastructure.
As in Example 1, the Parent and RuleId parameters are used to specify the scope and GUID for the new rule, the two pieces that make up the rule Identity.

After the virtual rule has been created, the next two commands are used to assign values to the MajorVersion and UserAgent properties, respectively.
When those tasks are complete, the final command in the example and the Set-CsClientVersionPolicyRule cmdlet is used to create the actual client version policy rule and assign the rule to the Redmond site.

$x = \[guid\]::NewGuid()

$z = New-CsClientVersionPolicyRule -Parent "site:Redmond" -RuleId $x -InMemory

$z.MajorVersion = 4

$z.UserAgent = "Inhouse"

Set-CsClientVersionPolicyRule -Instance $z

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 2 represent a variation of the command shown in Example 1: in this case, however, the new rule is initially created in memory only, and only later added to Skype for Business Server 2015.
To carry out this task, the first command in the example creates the GUID portion of the Identity.
In command 2, a new in-memory-only client version policy rule is created; the InMemory parameter ensures that the rule exists only in memory and is not immediately added to the Skype for Business Server 2015 infrastructure.
As in Example 1, the Parent and RuleId parameters are used to specify the scope and GUID for the new rule, the two pieces that make up the rule Identity.

After the virtual rule has been created, the next two commands are used to assign values to the MajorVersion and UserAgent properties, respectively.
When those tasks are complete, the final command in the example and the Set-CsClientVersionPolicyRule cmdlet is used to create the actual client version policy rule and assign the rule to the Redmond site.

$x = \[guid\]::NewGuid()

$z = New-CsClientVersionPolicyRule -Parent "site:Redmond" -RuleId $x -InMemory

$z.MajorVersion = 4

$z.UserAgent = "Inhouse"

Set-CsClientVersionPolicyRule -Instance $z

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the client version policy rule to be created.
The Identity of a client version policy rule consists of the scope where the rule has been configured plus a globally unique identifier (GUID).
That means that a rule will have an Identity similar to this: site:Redmond/1987d3c2-4544-489d-bbe3-59f79f530a83.

Instead of using the Identity parameter you can use the Parent and RuleId parameters to have New-CsClientVerisonPolicyRule create the Identity for you.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the client version policy rule to be created.
The Identity of a client version policy rule consists of the scope where the rule has been configured plus a globally unique identifier (GUID).
That means that a rule will have an Identity similar to this: site:Redmond/1987d3c2-4544-489d-bbe3-59f79f530a83.

Instead of using the Identity parameter you can use the Parent and RuleId parameters to have the New-CsClientVerisonPolicyRule cmdlet create the Identity for you.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MajorVersion
Major version of the software.
For example, if your copy of Communicator is version 2.0.6362.111, then the MajorVersion is 2.
Major versions equate to primary releases of the software.
You must assign a value to the MajorVersion property any time you create a new rule.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinorVersion
Minor version of the software.
For example, if your copy of Communicator is version 2.0.6362.111, then the MinorVersion is 0.
Minor versions equate to interim releases of the software.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserAgent
Designator used to identify the software client.
For example, OC is the user agent designation for Communicator.

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

### -Action
Action to be taken any time the rule is triggered (that is, any time someone attempts to log on by using the specified software).
Valid values are:

Allow.
The user will be allowed to log on.

AllowWithUrl.
The user will be allowed to log on, and a message will be displayed pointing him or her to a URL where the latest version of Lync can be downloaded and installed.

AllowAndUpgrade.
The user will be allowed to log on, and his or her copy of Communicator will automatically be upgraded to the latest version of Lync.

Block.
The user will not be allowed to log on.

BlockWithUrl.
The user will not be allowed to log on, but a message will be displayed pointing him or her to a URL where the latest version of Lync can be downloaded and installed.

BlockAndUpgrade.
The user will not be allowed to log on, but his or her copy of Communicator will automatically be upgraded to the latest version of Lync.
The user can then try to log on by using the new client application.

```yaml
Type: Action
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActionUrl
URL where users can download the latest version of Lync.
This property is required if the Action is set to BlockWithUrl or AllowWithUrl.

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

### -BuildNumber
Build number of the software.
For example, if your copy of Communicator is version 2.0.6362.111, then the BuildNumber is 6362.
Build numbers represent internal versions of the software during the development process, and help to ensure that you are using the final release version as opposed to a pre-release version.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompareOp
Comparison operator used to determine if the client software attempting to log on was released before, after, or at the same time as the version specified in the rule.
Valid values are:

EQL (equal to)

NEQ (not equal to)

GTR (greater than)

GEQ (greater than or equal to)

LSS (less than)

LEQ (less than or equal to)

```yaml
Type: CompareOp
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide additional information about the client version rule.
For example, the Description might include information about who to contact if you believe the rule should be changed.

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

### -Enabled
Indicates whether or not the client version rule is to be used.
If the Enabled property is set to False ($False), then the rule will be ignored any time a user attempts to log on with the specified software.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
**Below Content Applies To:** Lync Server 2010

Scope information for the new rule.
To use the Parent parameter and create a new rule for the global policy, use this syntax:  -Parent global.
To create a new rule for a site policy, use syntax similar to this: -Parent "site:Redmond".
To create a new rule for a service policy, use syntax similar to this: -parent "Registrar:atl-cs-001.litwareinc.com".
To create a new rule for a per-user policy, use syntax similar to this: -Parent "RedmondClientVersionPolicy".

You must use either the Identity parameter or both the Parent and RuleId parameters when creating a new rule.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Scope information for the new rule.
To use the Parent parameter and create a new rule for the global policy, use this syntax: -Parent global.
To create a new rule for a site policy, use syntax similar to this: -Parent "site:Redmond".
To create a new rule for a service policy, use syntax similar to this: -parent "Registrar:atl-cs-001.litwareinc.com".
To create a new rule for a per-user policy, use syntax similar to this: -Parent "RedmondClientVersionPolicy".

You must use either the Identity parameter or both the Parent and RuleId parameters when creating a new rule.



```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
Relative priority of the rule.
Rules are processed in priority order, with the rule that has priority 0 being processed first, the rule that has priority 1 being processed second, and so on.
If you assign a priority that is already in use, the new rule will use that priority and other rules will be renumbered accordingly.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QfeNumber
Quick fix engineering number of the software.
For example, if your copy of Communicator is version 2.0.6362.111, then the QfeNumber is 111.
QFE numbers represent planned updates to an application that are made available after the software's official release.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RuleId
Globally unique identifier (GUID) for the rule.
In Windows PowerShell, you can create a GUID by using the following command:

$x = \[guid\]::NewGuid()

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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

### -UserAgentFullName
**Below Content Applies To:** Lync Server 2010

{{Fill UserAgentFullName Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables administrators to provide a friendly name for the user agent.
For example, instead of relying on the user agent UCCP to identify the agent administrators might spell the name out in full: Microsoft Unified Communications Client.



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

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new client version policy rule is being created.
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
New-CsClientVersionPolicyRule does not accept pipelined input.

###  
None.
The New-CsClientVersionPolicyRule cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsClientVersionPolicyRule creates new instances of Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.Rule object.

###  
The New-CsClientVersionPolicyRule cmdlet creates new instances of Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.Rule object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d28df005-0db0-4b17-9ca0-9dc9ed063d73(OCS.14).aspx)

[Get-CsClientVersionPolicyRule]()

[Remove-CsClientVersionPolicyRule]()

[Set-CsClientVersionPolicyRule]()

[Online Version](http://technet.microsoft.com/EN-US/library/d28df005-0db0-4b17-9ca0-9dc9ed063d73(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d28df005-0db0-4b17-9ca0-9dc9ed063d73(OCS.16).aspx)

