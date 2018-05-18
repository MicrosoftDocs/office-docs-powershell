---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsUserServicesPolicy
schema: 2.0.0
---

# New-CsUserServicesPolicy

## SYNOPSIS
Creates a new User Services policy.
User Services policies determine whether or not a user's contacts are stored in Skype for Business Server or in the Unified Contact Store.
The Unified Contact Store provides a way for users to maintain a single set of contacts that can be accessed using Skype for Business, Microsoft Outlook and/or Microsoft Outlook Web Access.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
New-CsUserServicesPolicy [-Identity] <XdsIdentity> [-Confirm] [-Force] [-InMemory] [-Tenant <Guid>]
 [-UcsAllowed <Boolean>] [-WhatIf] [-EnableAwaySinceIndication <Boolean>] [-MigrationDelayInDays <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
The unified contact store introduced in Skype for Business Server gives administrators the option of storing a user's contacts in Exchange instead of in Skype for Business Server; in turn that allows the user to access the same set of contacts in Microsoft Outlook and Outlook Web Access as well as in Skype for Business.
(Alternatively, you can continue to store contacts in Skype for Business Server.
In that case, users will have to maintain two separate sets of contacts: one for use with Outlook and Outlook Web Access and one for use with Skype for Business.)

In order to take advantage of the unified contact store you must (among other things) assign the user a user services policy that enables the use of the unified contact store.
User service policies (which can be configured at the global, site, or the per-user scope) contain only a single property: UcsAllowed.
When this property is set to True then (assuming all the other prerequisites have been met) the next time a user logs on to Skype for Business Server his or her contacts will automatically be migrated to the unified contact store.

If this property is set to False this automatic migration will not take place.
However, simply setting UcsAllowed will not cause a user's contacts to be moved from the unified contact store back to Skype for Business Server.
In order to do that, you must first assign the user a user services policy that does not allow the use of the unified contact store.
After that, you must then use the `Invoke-CsUcsRollback` cmdlet to "manually" migrate the contacts from the unified contact store back to Skype for Business.

Skype for Business Server Control Panel: The functions carried out by the `New-CsUserServicesPolicy` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsUserServicesPolicy -Identity "site:Redmond" -UcsAllowed $False
```

The command shown in Example 1 creates a new User Services policy for the Redmond site.
Users managed by this policy will not have their contacts moved to the Unified Contact Store; that's because the UcsAllowed parameter has been set to False ($False).


## PARAMETERS

### -Identity
Unique identifier for the policy to be created.
To create a policy at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To create a policy at the service scope, use syntax similar to this:

`-Identity "UserServer:atl-cs-001.litwareinc.com"`

Note that the User Server service is the only service that can host a user services policy.

Policies can also be created at the per-user scope.
To create a per-user policy, use syntax similar to this:

`-Identity "RedmondUserServicesPolicy"`


```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the new user services policy is being created.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAwaySinceIndication
PARAMVALUE: $true | $false

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Type: Int32
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

###  
None.
The `New-CsUserServicesPolicy` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `New-CsUserServicesPolicy` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UserServices.UserServicesPolicy object.

## NOTES

## RELATED LINKS

[Get-CsUserServicesPolicy](Get-CsUserServicesPolicy.md)

[Grant-CsUserServicesPolicy](Grant-CsUserServicesPolicy.md)

[Remove-CsUserServicesPolicy](Remove-CsUserServicesPolicy.md)

[Set-CsUserServicesPolicy](Set-CsUserServicesPolicy.md)

