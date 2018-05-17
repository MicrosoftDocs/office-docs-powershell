---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsClientPolicy
schema: 2.0.0
---

# Get-CsClientPolicy

## SYNOPSIS

Returns information about the client policies configured for use in your organization.
Among other things, client policies help determine the features of Skype for Business that are available to users; for example, you might give some users the right to transfer files while denying this right to other users.


## SYNTAX

### Identity
```
Get-CsClientPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Filter
```
Get-CsClientPolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

###  (Default)
```
Get-CsClientPolicy [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```


## DESCRIPTION
Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Skype for Business policies, can readily be targeted to selected groups of users.
You can even create a custom policy that gets assigned to a single user.

Client policies can be configured at the global, site, and per-user scopes.
The Get-CsClientPolicy cmdlet enables you to return information about all the client policies that have been configured for use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsClientPolicy
```

In Example 1, Get-CsClientPolicy is called without any additional parameters; this returns a collection of all the client policies configured for use in your organization.


### -------------------------- Example 2 --------------------------
```
Get-CsClientPolicy -Identity SalesPolicy
```

In Example 2, Get-CsClientPolicy is used to return the per-user client policy that has an Identity SalesPolicy.
Because identities are unique, this command will never return more than one item.

### -------------------------- Example 3 --------------------------
```
Get-CsClientPolicy -Filter "tag:*"
```

Example 3 uses the Filter parameter to return all the client policies that have been configured at the per-user scope.
The filter value "tag:*" tells Get-CsClientPolicy to return only those policies that have an Identity that begins with the string value "tag:".

### -------------------------- Example 4 --------------------------
```
Get-CsClientPolicy | Where-Object {$_.DisableSavingIM -eq $True}
```

The preceding command returns a collection of all the client policies where the DisableSavingIM property is True.
To do this, Get-CsClientPolicy is first called without any parameters in order to return a collection of all the client policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those policies where the DisableSavingIM property is equal to True.

### -------------------------- Example 5 --------------------------
```
Get-CsClientPolicy | Where-Object {$_.DisableSavingIM -eq $True -and $_.EnableIMAutoArchiving -eq $False}
```

In Example 5, the only client policies returned are the policies that meet two criteria: the DisableSavingIM property must be True and the EnableIMAutoArchiving property must be False.
To do this, the command first calls Get-CsClientPolicy in order to return a collection of all the client policies configured for use in the organization.
That collection is then piped to Where-Object, which picks out only those policies that meet both of the following criteria: DisableSavingIM must be equal to True and EnableIMAutoArchiving must be equal to False.
The -and operator tells Where-Object that only objects that meet all the specified criteria should be selected.

### -------------------------- Example 6 --------------------------
```
Get-CsClientPolicy | Where-Object {$_.DisableSavingIM -eq $True -or $_.EnableIMAutoArchiving -eq $False}
```

Example 6 is a variation of the command shown in Example 5.
This time, however, policies are selected as long as they meet at least one of the following criteria: either the DisableSavingIM property is True and/or the EnableIMAutoArchiving property is False.
To accomplish this task, the command first calls Get-CsClientPolicy to return a collection of all the client policies configured for use in the organization.
That collection is then piped to Where-Object, which picks out only those policies that meet at least one of the following criteria: DisableSavingIM is equal to True and/or EnableIMAutoArchiving is equal to False.
The -or operator tells Where-Object that any object that meets at least one of the specified conditions should be selected.


## PARAMETERS

### -Identity
Unique identifier of the client policy to be returned.
To refer to the global policy, use this syntax: -Identity global.
To refer to a site policy, use syntax similar to this: -Identity site:Redmond.
To refer to a per-user policy, use syntax similar to this: -Identity SalesDepartmentPolicy.

If this parameter is omitted, then all the client policies configured for use in your organization will be returned.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
For example, to return all the policies configured at the site scope use this syntax: -Filter "site:*".
To return a collection of all the per-user policies, use this syntax: -Filter "tag:*".

```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the client policy data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose client policies are being returned.
For example: 

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command: 

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.Client.ClientPolicy


## NOTES


## RELATED LINKS
[Grant-CsClientPolicy](Grant-CsClientPolicy.md)

[New-CsClientPolicy](New-CsClientPolicy.md)

[Remove-CsClientPolicy](Remove-CsClientPolicy.md)

[Set-CsClientPolicy](Set-CsClientPolicy.md)

