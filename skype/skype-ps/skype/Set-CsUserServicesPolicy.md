---
external help file: 
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsUserServicesPolicy
schema: 2.0.0
---

# Set-CsUserServicesPolicy

## SYNOPSIS
Modifies an existing User Services policy.
User Services policies determine whether or not a user's contacts are stored in Skype for Business Server or in the Unified Contact Store.
The Unified Contact Store provides a way for users to maintain a single set of contacts that can be accessed using Skype for Business, Outlook, and/or Outlook Web Access.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Set-CsUserServicesPolicy [[-Identity] <XdsIdentity>] [-Confirm] [-Force] [-Tenant <Guid>]
 [-UcsAllowed <Boolean>] [-WhatIf] [-EnableAwaySinceIndication <Boolean>] [-MigrationDelayInDays <Int32>]
 [<CommonParameters>]
```

### Instance
```
Set-CsUserServicesPolicy [-Confirm] [-Force] [-Instance <PSObject>] [-Tenant <Guid>] [-UcsAllowed <Boolean>]
 [-WhatIf] [-EnableAwaySinceIndication <Boolean>] [-MigrationDelayInDays <Int32>] [<CommonParameters>]
```

###  (Default)
```
Set-CsUserServicesPolicy [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm]
 [-EnableAwaySinceIndication <Object>] [-Force] [-Instance <Object>] [-MigrationDelayInDays <Object>]
 [-Tenant <Object>] [-UcsAllowed <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server; in turn that allows the user to access the same set of contacts in Outlook and Outlook Web Access as well as.
(Alternatively, you can continue to store contacts in Skype for Business Server.
In that case, users will have to maintain two separate sets of contacts: one for use with Outlook and Outlook Web Access and one for use with Skype for Business.)

In order to take advantage of the unified contact store you must (among other things) assign the user a user services policy that enables the use of the unified contact store.
User service policies (which can be configured at the global, site, or the per-user scope) contain only a single property: UcsAllowed.
When this property is set to True then (assuming all the other prerequisites have been met) the next time a user logs on to Skype for Business Server his or her contacts will automatically be migrated to the unified contact store.

If this property is set to False this automatic migration will not take place.
However, simply setting UcsAllowed will not cause a user's contacts to be moved from the unified contact store back to Skype for Business Server.
In order to do that, you must first assign the user a user services policy that does not allow the use of the unified contact store.
After that, you must then use the `Invoke-CsUcsRollback` cmdlet to "manually" migrate the contacts from the unified contact store back to Skype for Business Server.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsUserServicesPolicy` cmdlet are not available in the Skype for Business Server Control Panel.

The following parameters are not applicable to Skype for Business Online: AsJob, Force, Identity, Instance, MigrationDelayInDays, PipelineVariable, and Tenant

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsUserServicesPolicy -Identity "RedmondUserServicesPolicy" -UcsAllowed $False
```

The command shown in Example 1 disables the use of the Unified Contact Store for the per-user User Services policy RedmondUserServicesPolicy.
This means that users managed by this policy will not have their contacts stored in the Unified Contact Store.


### -------------------------- Example 2 --------------------------
```
Get-CsUserServicesPolicy -Filter "site:*" | Set-CsUserServicesPolicy -UcsAllowed $False
```

In Example 2, all the User Services policies configured at the site scope are modified to disable the use of the Unified Contact Store.
To do this, the command first calls the `Get-CsUserServicesPolicy` cmdlet and the Filter parameter to return a collection of all the policies configured at the site scope.
This collection is then piped to the `Set-CsUserServicesPolicy` cmdlet, which takes each policy in the collection and sets the UcsAllowed property to False ($False).


## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.
Suppresses the display of any non-fatal error message that might arise when running the command.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.


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

### -Identity
Unique identifier for the policy to be modified.
To modify the global policy, use this syntax:

`-Identity "global"`

To modify a policy configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To modify a policy configured at the service scope, use syntax similar to this:

`-Identity "UserServer:atl-cs-001.litwareinc.com"`

Note that the UserServer service is the only service that can host a user services policy.

If this parameter is not included then the `Set-CsUserServicesPolicy` cmdlet will automatically modify the global policy.


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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.


```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the user services policy being modified.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


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

### -UcsAllowed
When set to True (the default value) users affected by the policy will automatically be migrated to the unified contact store (assuming that they have an account on Exchange and that they log on using Skype for Business).
When set to False, users can be removed from the unified contact store, but only if they are "manually" removed by the `Invoke-CsUcsRollback` cmdlet.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

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

### -EnableAwaySinceIndication
PARAMVALUE: $true | $false


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

### -MigrationDelayInDays
Specifies the number of days the system will wait before beginning a migration to or from the unified contact store.
MigrationDelayInDays can be set to any value between 0 and 180, inclusive.
The default value is 0.


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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
The `Set-CsUserServicesPolicy` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UserServices.UserServicesPolicy object.

## OUTPUTS

###  
None.
Instead, the `Set-CsUserServicesPolicy` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UserServices.UserServicesPolicy object.

## NOTES

## RELATED LINKS

[Get-CsUserServicesPolicy](Get-CsUserServicesPolicy.md)

[Grant-CsUserServicesPolicy](Grant-CsUserServicesPolicy.md)

[New-CsUserServicesPolicy](New-CsUserServicesPolicy.md)

[Remove-CsUserServicesPolicy](Remove-CsUserServicesPolicy.md)

