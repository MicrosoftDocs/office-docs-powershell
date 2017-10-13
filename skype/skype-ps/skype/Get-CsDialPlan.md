---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
title: Get-CsDialPlan
schema: 2.0.0
---

# Get-CsDialPlan

## SYNOPSIS
Returns information about the dial plans used in your organization.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsDialPlan [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsDialPlan [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

###  (Default)
```
Get-CsDialPlan [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns information about one or more dial plans (also known as a location profiles) in an organization.
Dial plans provide information required to enable Enterprise Voice users to make telephone calls.
Dial plans are also used by the Conferencing Attendant application for dial-in conferencing.
A dial plan determines such things as which normalization rules are applied and whether a prefix must be dialed for external calls.

Note: You can use the Get-CsDialPlan cmdlet to retrieve specific information about the normalization rules of a dial plan, but if that's the only dial plan information you need, you can also use the Get-CsVoiceNormalizationRule cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsDialPlan
```

Example 1 returns a collection of all the dial plans configured for use in your organization; this is done by calling the Get-CsDialPlan cmdlet without any additional parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsDialPlan -Identity RedmondDialPlan
```

In Example 2, the Identity parameter is used to limit the retrieved data to dial plans that have a per-user dial plan with the Identity RedmondDialPlan.
Because identities must be unique, this command will return only the specified dial plan.

### -------------------------- Example 3 --------------------------
```
Get-CsDialPlan -Identity site:Redmond
```

Example 3 is identical to Example 2 except that instead of retrieving a per-user dial plan, we're retrieving a dial plan assigned to a site.
We do that by specifying the value site: followed by the site name (in this case Redmond) of the site we want to retrieve.

### -------------------------- Example 4 --------------------------
```
Get-CsDialPlan -Filter tag:*
```

This example uses the Filter parameter to return a collection of all the dial plans that have been configured at the per-user scope.
(Settings configured at the per-user, or tag, scope can be directly assigned to users and groups.) The wildcard string tag:* instructs the cmdlet to return only those dial plans that have an identity beginning with the string value tag:, which identifies a dial plan as a per-user dial plan.

### -------------------------- Example 5 --------------------------
```
Get-CsDialPlan | Select-Object -ExpandProperty NormalizationRules
```

This example displays the normalization rules used by the dial plans configured for use in your organization.
Because the NormalizationRules property consists of an array of objects, the complete set of normalization rules is typically not displayed on screen.
To see all of these rules, this sample command first uses the Get-CsDialPlan cmdlet to retrieve a collection of all the dial plans.
That collection is then piped to the Select-Object cmdlet; in turn, the ExpandProperty parameter of the Select-Object cmdlet is used to "expand" the values found in the NormalizationRules property.
Expanding the values simply means that all the normalization rules will be listed out individually on the screen, the same output that would be seen if the Get-CsVoiceNormalizationRule cmdlet had been called.

### -------------------------- Example 6 --------------------------
```
Get-CsDialPlan | Where-Object {$_.Description -match "Redmond"}
```

In Example 6, the Get-CsDialPlan cmdlet and the Where-Object cmdlet are used to retrieve a collection of all the dial plans that include the word Redmond in their description.
To do this, the command first uses the Get-CsDialPlan cmdlet to retrieve all the dial plans.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to profiles that have the word Redmond somewhere in their Description.


## PARAMETERS

### -Identity
The unique identifier designating the scope, and for per-user scope a name, to identify the dial plan you want to retrieve.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Performs a wildcard search that allows you to narrow down your results to only dial plans with identities that match the given wildcard string.

```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the dial plan information from the local replica of the Central Management store, rather than the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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

### -Tenant
{{Fill Tenant Description}}

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


## OUTPUTS

###  Microsoft.Rtc.Management.WritableConfig.Policy.Voice.LocationProfile


## NOTES

## RELATED LINKS

[New-CsDialPlan](New-CsDialPlan.md)

[Remove-CsDialPlan](Remove-CsDialPlan.md)

[Set-CsDialPlan](Set-CsDialPlan.md)

[Grant-CsDialPlan](Grant-CsDialPlan.md)

[Test-CsDialPlan](Test-CsDialPlan.md)

[Get-CsVoiceNormalizationRule](Get-CsVoiceNormalizationRule.md)
