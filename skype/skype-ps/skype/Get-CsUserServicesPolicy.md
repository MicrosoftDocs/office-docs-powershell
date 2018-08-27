---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsUserServicesPolicy
schema: 2.0.0
---

# Get-CsUserServicesPolicy

## SYNOPSIS
Returns information about the User Services policies configured for use in the organization.
User Services policies determine whether or not a user's contacts are stored in Skype for Business Server or in the Unified Contact Store.
The Unified Contact Store provides a way for users to maintain a single set of contacts that can be accessed using Skype for Business, Outlook, and/or Outlook Web Access.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Filter
```
Get-CsUserServicesPolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Identity
```
Get-CsUserServicesPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

###  (Default)
```
Get-CsUserServicesPolicy [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The unified contact store introduced in Skype for Business Server gives administrators the option of storing a user's contacts in Exchange instead of in Skype for Business Server; in turn that allows the user to access the same set of contacts in Outlook and Outlook Web App as well as in Skype for Business.
(Alternatively, you can continue to store contacts in Skype for Business Server.
In that case, users will have to maintain two separate sets of contacts: one for use with Outlook and Outlook Web App, and one for use with Skype for Business Server.)

In order to take advantage of the unified contact store you must (among other things) assign the user a user services policy that enables the use of the unified contact store.
User service policies (which can be configured at the global, site, or the per-user scope) contain only a single property: UcsAllowed.
When this property is set to True then (assuming all the other prerequisites have been met) the next time a user logs on to Skype for Business Server his or her contacts will automatically be migrated to the unified contact store.

If this property is set to False this automatic migration will not take place.
However, simply setting UcsAllowed will not cause a user's contacts to be moved from the unified contact store back to Skype for Business Server.
In order to do that, you must first assign the user a user services policy that does not allow the use of the unified contact store.
After that, you must then use the Invoke-CsUcsRollback cmdlet to "manually" migrate the contacts from the unified contact store back to Skype for Business Server.

Skype for Business Server Control Panel: The functions carried out by the Get-CsUserServicesPolicy cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsUserServicesPolicy
```

The command shown in Example 1 returns information about all the User Services policies currently in use in the organization.

### -------------------------- Example 2 --------------------------
```

Get-CsUserServicesPolicy -Identity "site:Redmond"
```

In Example 2, information is returned for a single User Services policy: the policy configured for the Redmond site.


### -------------------------- Example 3 -------------------------- 
```
Get-CsUserServicesPolicy -Filter "site:*"
```

Example 3 returns information for all the User Services policies configured at the site scope.
This is done by including the Filter parameter and the filter value "site:*".


### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```
Get-CsUserServicesPolicy | Where-Object {$_.UcsAllowed -eq $False}
```

The command shown in Example 4 returns information about the User Services policies where the use of the Unified Contact Store has been disabled.
To carry out this task, the command first calls the Get-CsUserServicesPolicy cmdlet without any parameters; this returns a collection of all the User Services policies configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those policies where the UcsAllowed property has been set to false ($False).

## PARAMETERS

### -Filter
Enables you to use wildcards when specifying the policy (or policies) to be retrieved.
For example, this syntax returns all the policies that have been configured at the site scope:

`-Filter "site:*"`

This syntax returns all the policies that have been configured at the per-user scope:

`-Filter "tag:*"`

You cannot use both the Filter and the Identity parameters in the same command.




```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the policy to be returned.
To return the global policy, use this syntax:

`-Identity global`

To return a policy configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To return a policy configured at the service scope, use syntax similar to this:

`-Identity "UserServer:atl-cs-001.litwareinc.com"`

Note that the UserServer service is the only service that can host a user services policy.

Policies can also be configured at the per-user scope.
To return one of these policies, use syntax similar to this:

`-Identity "RedmondUserServicesPolicy"`

If this parameter is not included then all of the user services policies configured for use in your organization will be returned.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the user services policy data from the local replica of the Central Management store rather than from the Central Management store itself.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
When used, retrieves the user services policy for the specified Skype for Business Online tenant.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You should not use the Tenant parameter and the Identity parameter in the same command.



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

###  
None.
The Get-CsUserServicesPolicy cmdlet does not accept pipelined input.

## OUTPUTS

### System.Object

###  
The Get-CsUserServicesPolicy cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UsersServices.UserServicesPolicy object.

## NOTES

## RELATED LINKS

[Grant-CsUserServicesPolicy](Grant-CsUserServicesPolicy.md)

[New-CsUserServicesPolicy](New-CsUserServicesPolicy.md)

[Remove-CsUserServicesPolicy](Remove-CsUserServicesPolicy.md)

[Set-CsUserServicesPolicy](Set-CsUserServicesPolicy.md)

