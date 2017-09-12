---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsClientVersionPolicyRule

## SYNOPSIS
Modifies one or more client version policy rules currently configured for use in your organization.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsClientVersionPolicyRule [[-Identity] <XdsIdentity>] [-Action <Action>] [-ActionUrl <String>]
 [-BuildNumber <UInt16>] [-CompareOp <CompareOp>] [-Description <String>] [-Enabled <Boolean>]
 [-MajorVersion <UInt16>] [-MinorVersion <UInt16>] [-Priority <Int32>] [-QfeNumber <UInt16>]
 [-UserAgent <String>] [-Force] [-WhatIf] [-Confirm] [-UserAgentFullName <String>] [-Tenant <Guid>]
 [<CommonParameters>]
```

### Instance
```
Set-CsClientVersionPolicyRule [-Instance <PSObject>] [-Action <Action>] [-ActionUrl <String>]
 [-BuildNumber <UInt16>] [-CompareOp <CompareOp>] [-Description <String>] [-Enabled <Boolean>]
 [-MajorVersion <UInt16>] [-MinorVersion <UInt16>] [-Priority <Int32>] [-QfeNumber <UInt16>]
 [-UserAgent <String>] [-Force] [-WhatIf] [-Confirm] [-UserAgentFullName <String>] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
Client version rules are used to determine which client applications are allowed to log on to Skype for Business Server.
When a user attempts to log on to Skype for Business Server, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version and build number.
The version information is then checked against a collection of client version rules to see if any rules apply to that particular application.
For example, suppose a user attempts to log on by using Microsoft Office Communicator 2007 R2.
Before the user can log on to Skype for Business Server, the system will check to see if there is a client version rule that applies to Office Communicator 2007 R2.
If a rule exists, Skype for Business Server will then take the action specified by the rule.
That action must be one of the following:

Allow.
The user will be allowed to log on.

AllowAndUpgrade.
The user will be allowed to log on, and his or her copy of Communicator 2007 R2 will automatically be upgraded to the latest version of Lync.
Upgrades are carried out using either Microsoft Update or Windows Server Update Services, depending on how you have configured your system.

AllowWithUrl.
The user will be allowed to log on, and a message will be displayed pointing the user to a URL where the latest version of Lync can be downloaded and installed.
The URL must point to a website that you have created yourself; no such site is created for you when you install Skype for Business Server.

Block.
The user will not be allowed to log on.

BlockAndUpgrade.
The user will not be allowed to log on, but his or her copy of Communicator 2007 R2 will automatically be upgraded to the latest version of Lync.
The user can then try to log on by using the new client application.
Upgrades are carried out using either Microsoft Update or Windows Server Update Services, depending on how you have configured your system.

BlockWithUrl.
The user will not be allowed to log on, but a message will be displayed pointing him or her to a URL where the latest version of Lync can be downloaded and installed.
The URL must point to a website that you have created yourself; no such site is created for you when you install Skype for Business Server.

Client version rules are collected in client version policies; these policies that can be configured at the global scope, the site scope, the service scope (Registrar service), or the per-user scope.
The `Set-CsClientVersionPolicyRule` cmdlet provides a way for you to modify the properties of an existing client version rule.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsClientVersionPolicyRule -Identity site:Redmond/74ba9211-8610-42f9-91ba-846cdee98820 -Enabled $False
```

The command shown in Example 1 disables the client version policy rule that has the Identity site:Redmond/74ba9211-8610-42f9-91ba-846cdee98820.
To disable the rule, the command includes the Enabled parameter and the parameter value $False.


### -------------------------- Example 2 ------------------------
```
Get-CsClientVersionPolicyRule -Filter "site:Redmond*" | Set-CsClientVersionPolicyRule -Description "Client policy rules for Redmond"
```

Example 2 adds a generic description to all the client version policy rules assigned to the Redmond site.
To do this, the command first calls the `Get-CsClientVersionPolicyRule` cmdlet along with the Filter parameter; the filter value "site:Redmond*" limits the returned data to policy rules assigned to the Redmond site.
This collection is then piped to the `Set-CsClientVersionPolicyRule` cmdlet, which assigns the Description "Client policy rules for Redmond" to each item in that collection.


### -------------------------- Example 3 ------------------------
```
Get-CsClientVersionPolicyRule | Where-Object {$_.UserAgent -eq "UCCP"} | Set-CsClientVersionPolicyRule -Action "Block"
```

Example 3 blocks the use of Unified Communications Client Platform (UCCP) clients for any client version policy rule that references UCCP as the user agent.
To carry out this task, the command first calls the `Get-CsClientVersionPolicyRule` cmdlet to retrieve a collection of all the client policy rules currently in use.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those rules where the UserAgent property is equal to (-eq) UCCP.
This filtered collection is then piped to the `Set-CsClientVersionPolicyRule` cmdlet, which takes each item in the collection and sets the Action property to Block.


## PARAMETERS

### -Identity
Unique identifier for the client version policy rule to be modified.
The Identity of a client version rule consists of the scope where the rule has been configured plus a globally unique identifier (GUID).
That means that a rule will have an Identity similar to this: site:Redmond/1987d3c2-4544-489d-bbe3-59f79f530a83.

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
If the Enabled property is set to False the rule will be ignored any time a user attempts to log on with the specified software.
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

### -MajorVersion
Major version of the software.
For example, if your copy of Communicator is version 2.0.6362.111, then the MajorVersion is 2.
Major versions equate to primary releases of the software.

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

### -Priority
Relative priority of the rule.
Rules are processed in priority order, with the rule with priority 0 being processed first, the rule with priority 1 being processed second, and so on.
If you assign a priority already in use, the new rule will use that priority and other rules will be renumbered accordingly.

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

### -UserAgent
Designator used to identify the software client.
For example, OC is the user agent designation for Communicator.
The `Get-CsClientVersionConfiguration` cmdlet provides corresponding friendly names for each user agent designation.

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

### -UserAgentFullName
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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the client version policy rule is being modified.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

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
The `Set-CsClientVersionPolicyRule` cmdlet accepts pipelined instances of the client version rule object.

## OUTPUTS

###  
None.
Instead, the `Set-CsClientVersionPolicyRule` cmdlet modifies instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.Rule object.

## NOTES

## RELATED LINKS

[Get-CsClientVersionPolicyRule]()

[New-CsClientVersionPolicyRule]()

[Set-CsClientVersionPolicyRule]()
