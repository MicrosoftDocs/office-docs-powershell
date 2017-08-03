---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsClientVersionPolicyRule

## SYNOPSIS
Returns the client version policy rules configured for use in your organization.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsClientVersionPolicyRule [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Filter
```
Get-CsClientVersionPolicyRule [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Client version policy rules are used to determine which client applications are allowed to log on to Skype for Business Server.
When a user attempts to log on to Skype for Business Server, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information is then checked against a collection of client version rules to see if any rules apply to that particular application.
For example, suppose a user attempts to log on by using Microsoft Office Communicator 2007 R2.
Before the user can log on to Skype for Business Server, the system will check to see if there is a client version rule that applies to Office Communicator 2007 R2.
If a rule exists, Skype for Business Server will then take the action specified by the rule.
That action must be one of the following:

- Allow: 
The user will be allowed to log on.
- AllowAndUpgrade: 
The user will be allowed to log on, and his or her copy of Communicator 2007 R2 will automatically be upgraded to the latest version of Skype for Business.
Upgrades are carried out using either Microsoft Update or Windows Server Update Services, depending on how you have configured your system.
- AllowWithUrl: 
The user will be allowed to log on, and a message will be displayed pointing the user to a URL where the latest version of Skype for Business can be downloaded and installed.
The URL must point to a website that you have created yourself; no such site is created for you when you install Skype for Business Server.
- Block: 
The user will not be allowed to log on.
- BlockAndUpgrade: 
The user will not be allowed to log on, but his or her copy of Communicator 2007 R2 will automatically be upgraded to the latest version of Skype for Business.
The user can then try to log on by using the new client application.
Upgrades are carried out using either Microsoft Update or Windows Server Update Services, depending on how you have configured your system.
- BlockWithUrl: 
The user will not be allowed to log on, but a message will be displayed pointing him or her to a URL where the latest version of Skype for Business can be downloaded and installed.
The URL must point to a website that you have created yourself; no such site is created for you when you install Skype for Business Server.

Client version rules are collected in client version policies.
These policies can be configured at the global scope, the site scope, the service scope (Registrar service), or the per-user scope.
The Get-CsClientVersionPolicyRule cmdlet provides a way for administrators to view detailed information about each of the policy rules configured for use in their organization.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsClientVersionPolicyRule
```

Example 1 returns information about all of the client version policy rules currently in use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsClientVersionPolicyRule -Identity "Global/2336c611-a243-4c5d-994b-eea8a524d0e4"
```

In Example 2, information about a single client version policy rule is returned: the rule with the Identity Global/2336c611-a243-4c5d-994b-eea8a524d0e4.

### -------------------------- Example 3 --------------------------
```
Get-CsClientVersionPolicyRule -Filter "Global/*"
```

Example 3 returns all the client version policy rules that have been configured at the global scope.
To do this, the command uses the Filter parameter and the filter value "Global/*".
That filter value returns only those rules that have an Identity that begins with the string value "Global/".

### -------------------------- Example 4 --------------------------
```
Get-CsClientVersionPolicyRule | Where-Object {$_.Enabled -eq $False}
```

The command shown in Example 4 returns all the client version policy rules that are currently disabled.
To do this, the command first calls the Get-CsClientVersionPolicy cmdlet in order to return a collection of all the available client policy rules.
This collection is then piped to the Where-Object cmdlet, which picks out the rules where the Enabled property is equal to False.

### -------------------------- Example 5 --------------------------
```
Get-CsClientVersionPolicyRule | Where-Object {$_.Action -eq "Block"}
```

Example 5 returns all the client version policy rules that block a client application from logging on.
To do this, the command first calls the Get-CsClientVersionPolicy cmdlet without any parameters; that returns a collection of all the rules currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those rules where the Action property is equal to Block.



## PARAMETERS

### -Identity
Unique identifier for the client version policy rule to be retrieved.
The Identity of a client version rule consists of the scope where the rule has been configured plus a globally unique identifier (GUID).
That means that a rule will have an Identity similar to this: site:Redmond/1987d3c2-4544-489d-bbe3-59f79f530a83.
Because GUIDs are difficult to remember and to work with, the Examples section in this Help topic lists alternate ways that you can identify the rules to be returned.

If this parameter is not specified all of the client version policy rules configured for use will be returned.

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

### -Filter
Enables you to use wildcard characters when specifying the client version policy rules to be returned.
For example, to return all the rules configured for the Redmond site, use this syntax: 

`-Filter "site:Redmond/*"`

You cannot use both the Filter and the Identity parameters in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the client version policy rule data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose client version policy rules are being returned.
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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.Rule


## NOTES


## RELATED LINKS

[New-CsClientVersionPolicyRule]()

[Remove-CsClientVersionPolicyRule]()

[Set-CsClientVersionPolicyRule]()