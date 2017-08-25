---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsDialPlan

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes the specified dial plan.
This cmdlet can also be used to remove the global dial plan.
If you remove the global dial plan, however, the dial plan will not actually be removed; instead, the settings will simply be reset to their default values.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes the specified dial plan.
This cmdlet can also be used to remove the global dial plan.
If you remove the global dial plan, however, the dial plan will not actually be removed; instead, the settings will simply be reset to their default values.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsDialPlan [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

This cmdlet removes an existing dial plan (also known as a location profile).
Dial plans provide information required to enable Enterprise Voice users to make telephone calls.
Dial plans are also used by the Conferencing Attendant application for dial-in conferencing.
A dial plan determines such things as which normalization rules are applied and whether a prefix must be dialed for external calls.

Note: Removing a dial plan will also remove any associated normalization rules.
If the global dial plan is removed, any associated normalization rules will also be removed, but a default global normalization rule will be created.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsDialPlan cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsDialPlan"}

**Below Content Applies To:** Skype for Business Server 2015

This cmdlet removes an existing dial plan (also known as a location profile).
Dial plans provide information required to enable Enterprise Voice users to make telephone calls.
Dial plans are also used by the Conferencing Attendant application for dial-in conferencing.
A dial plan determines such things as which normalization rules are applied and whether a prefix must be dialed for external calls.

Note: Removing a dial plan will also remove any associated normalization rules.
If the global dial plan is removed, any associated normalization rules will also be removed, but a default global normalization rule will be created.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsDialPlan -Identity RedmondDialPlan
```

The preceding example uses Remove-CsDialPlan to delete the per-user dial plan with the Identity RedmondDialPlan.
Note that when you delete a dial plan, you do not necessarily have to assign a new plan to users who were assigned the now-deleted plan.
Instead, those users will use the dial plan assigned to their service or site, or the global plan.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 uses Remove-CsDialPlan to delete the per-user dial plan with the Identity RedmondDialPlan.
Note that when you delete a dial plan, you do not necessarily have to assign a new plan to users who were assigned the now-deleted plan.
Instead, those users will use the dial plan assigned to their service or site, or the global plan.

Remove-CsDialPlan -Identity RedmondDialPlan

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 uses the Remove-CsDialPlan cmdlet to delete the per-user dial plan with the Identity RedmondDialPlan.
Note that when you delete a dial plan, you do not necessarily have to assign a new plan to users who were assigned the now-deleted plan.
Instead, those users will use the dial plan assigned to their service or site, or the global plan.

Remove-CsDialPlan -Identity RedmondDialPlan

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsDialPlan | Where-Object {$_.Description -match "Redmond"} | Remove-CsDialPlan
```

In Example 2 all the dial plans that include the word Redmond in their description are deleted.
To do this, the command first calls Get-CsDialPlan to return a collection of all the dial plans configured for use within the organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to profiles that include the word Redmond in their description.
After that's done, the filtered collection is passed to Remove-CsDialPlan, which removes all the dial plans in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2 all the dial plans that include the word Redmond in their description are deleted.
To do this, the command first calls Get-CsDialPlan to return a collection of all the dial plans configured for use within the organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to profiles that include the word Redmond in their description.
After that's done, the filtered collection is passed to Remove-CsDialPlan, which removes all the dial plans in the collection.

Get-CsDialPlan | Where-Object {$_.Description -match "Redmond"} | Remove-CsDialPlan

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2 all the dial plans that include the word Redmond in their description are deleted.
To do this, the command first calls the Get-CsDialPlan cmdlet to return a collection of all the dial plans configured for use within the organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to profiles that include the word Redmond in their description.
After that's done, the filtered collection is passed to the Remove-CsDialPlan cmdlet, which removes all the dial plans in the collection.

Get-CsDialPlan | Where-Object {$_.Description -match "Redmond"} | Remove-CsDialPlan

## PARAMETERS

### -Identity
The unique identifier of the dial plan you want to remove.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.LocationProfile object.
Remove-CsDialPlan accepts pipelined input of dial plan objects.

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.LocationProfile object.
The Remove-CsDialPlan cmdlet accepts pipelined input of dial plan objects.

## OUTPUTS

###  
This cmdlet removes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.LocationProfile object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/99845b82-1730-494a-8f47-2dec5ef177c1(OCS.14).aspx)

[New-CsDialPlan]()

[Set-CsDialPlan]()

[Get-CsDialPlan]()

[Grant-CsDialPlan]()

[Test-CsDialPlan]()

[Remove-CsVoiceNormalizationRule]()

[Get-CsVoiceNormalizationRule]()

[Online Version](http://technet.microsoft.com/EN-US/library/99845b82-1730-494a-8f47-2dec5ef177c1(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/99845b82-1730-494a-8f47-2dec5ef177c1(OCS.16).aspx)

