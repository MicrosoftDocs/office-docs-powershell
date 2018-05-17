---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsClientVersionPolicy
schema: 2.0.0
---

# Get-CsClientVersionPolicy

## SYNOPSIS
Returns information about which clients are supported in your Skype for Business Server environment.
Client version policies enable you to specify which clients will be able to log on to your Skype for Business Server system.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsClientVersionPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Filter
```
Get-CsClientVersionPolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Client version policies represent a collection of client version rules; in turn, client version rules are used to determine which client applications are allowed to log on to Skype for Business Server.
When a user attempts to log on to Skype for Business Server, his or her client application sends a SIP header to the server; this header includes detailed information about the application itself, including the software's major version, minor version, and build number.
The version information included in the SIP header is then checked against a collection of client version rules to see if any rules apply to that particular application.
If such a rule exists, Skype for Business Server will then take the action specified by the rule.
For example, the rule might tell Skype for Business Server to allow the logon, to block it, or to allow the logon but then silently upgrade the client application to the latest version (for example, upgrade Lync to Skype for Business).

Client version policies, which can be applied at the global scope, the site scope, the service scope (Registrar service only), or the per-user scope, give you flexibility in determining which client applications can be used to access the system.
For example, you might want to prevent users from logging on to Skype for Business Server by using Lync because it does not support the same features and capabilities as Skype for Business.

The Get-CsClientVersionPolicy cmdlet provides a way for you to retrieve all of the client version policies currently in use in your organization, as well as to view the individual rules that make up each of those policies.

It's important to note that client version policies do not apply to federated users; instead, federated users are bound by the client version policies used in their own organization.
For example, suppose a federated user uses client A, a client allowed by the federated organization.
As long as the federated organization allows the use of client A, this user will be able to communicate with your organization using that client.
This will be true even if your client version policy blocks the use of client A.
Client version policies enforced in your organization do not override the client version policies used in a federated organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsClientVersionPolicy
```

In the first example, the Get-CsClientVersionPolicy cmdlet is called without specifying any additional parameters.
This causes the Get-CsClientVersionPolicy cmdlet to return a collection of all the client version policies configured for use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsClientVersionPolicy -Identity site:Redmond
```

In Example 2, the Get-CsClientVersionPolicy cmdlet returns all the client version policies that have the Identity site:Redmond.
Because Identities must be unique, this command will never return more than one item.

### -------------------------- Example 3 --------------------------
```
Get-CsClientVersionPolicy -Filter site:*
```

Example 3 returns all the client version policies that have been configured at the site scope.
This is done by including the Filter parameter and the filter value "site:*"; that value instructs the Get-CsClientVersionPolicy cmdlet to return only those policies that have an Identity beginning with the string value "site:".

### -------------------------- Example 4 --------------------------
```
Get-CsClientVersionPolicy | Select-Object -ExpandProperty Rules
```

The command used in Example 4 displays detailed information about the individual rules configured for each client version policy.
To do this, the Get-CsClientVersionPolicy cmdlet is first used to retrieve a collection of all the client version policies configured for use in the organization.
That collection is then piped to the Select-Object cmdlet, which uses the ExpandProperty filter to expand the property values for the Rules property.
When this property is expanded, detailed information about each rule (including such property values as build number, major version, and minor version) is displayed on the screen.


## PARAMETERS

### -Identity
Unique identifier for the policy to be returned.
To return the global policy, use this syntax: -Identity global.
To return a policy configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To return a policy configured at the service scope, use syntax similar to this: -Identity "Registrar:atl-cs-001.litwareinc.com".
The Registrar service is the only service that can host a client version policy.

Policies can also be configured at the per-user scope.
To return one of these policies, use syntax similar to this: -Identity "SalesDepartmentPolicy".

If this parameter is not included then all of the client version policies configured for use in your organization will be returned.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcards when specifying the policy (or policies) to be retrieved.
For example, this syntax returns all the policies that have been configured at the site scope: -Filter "site:*".
This syntax returns all the policies that have been configured at the per-user scope: -Filter "tag:*".

You cannot use both the Filter and the Identity parameters in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the client version policy data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose client version policies are being returned.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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

### Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersion policy


## NOTES


## RELATED LINKS

[Grant-CsClientVersionPolicy](Grant-CsClientVersionPolicy.md)

[New-CsClientVersionPolicy](New-CsClientVersionPolicy.md)

[Remove-CsClientVersionPolicy](Remove-CsClientVersionPolicy.md)

[Set-CsClientVersionPolicy](Set-CsClientVersionPolicy.md)

