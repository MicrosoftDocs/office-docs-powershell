---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsDialInConferencingConfiguration
schema: 2.0.0
---

# Get-CsDialInConferencingConfiguration

## SYNOPSIS
Retrieves information about how Skype for Business Server 2015 responds when users join or leave a dial-in conference.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsDialInConferencingConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsDialInConferencingConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
When users join (or leave) a dial-in conference, Skype for Business Server can respond in different ways.
For example, participants might be asked to record their name before they can enter the conference itself.
Likewise, administrators can decide whether they want to have Skype for Business Server announce that dial-in participants have either left or joined a conference.

These conference "join behaviors" are managed using dial-in conferencing configuration settings; these settings can be configured at the global scope or at the site scope.
(Settings configured at the site scope take precedence over settings configured at the global scope.) The Get-CsDialInConferencingConfiguration cmdlet enables you to retrieve information about the dial-in conferencing configuration settings currently in use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsDialInConferencingConfiguration
```

Example 1 returns a collection of all the dial-in conferencing configuration settings currently in use in the organization.
Calling the Get-CsDialInConferencingConfiguration cmdlet without any additional parameters always returns the complete collection of dial-in conferencing settings.

### -------------------------- Example 2 --------------------------
```
Get-CsDialInConferencingConfiguration -Identity site:Redmond
```

Example 2 returns the dial-in conferencing configuration settings with the Identity site:Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsDialInConferencingConfiguration -Filter "site:*"
```

In Example 3, the Filter parameter is used to return all the dial-in conferencing settings that have been configured at the site scope.
The filter value "site:*" instructs the Get-CsDialInConferencingConfiguration cmdlet to return only those settings where the Identity begins with the string value "site:".
By design, any dial-conferencing settings that have an Identity beginning with "site:" represent settings configured at the site scope.

### -------------------------- Example 4 --------------------------
```
Get-CsDialInConferencingConfiguration | Where-Object {$_.EnableNameRecording -eq $False}
```

Example 4 uses the Get-CsDialInConferencingConfiguration cmdlet and the Where-Object cmdlet to return a collection of all the dial-in conferencing configuration settings where the EnableNameRecording property is set to False.
To do this, the Get-CsDialInConferencingConfiguration cmdlet is called without any parameters in order to return a collection of all the dial-in conferencing settings.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableNameRecording property is equal to False.


## PARAMETERS

### -Identity
Indicates the Identity of the dial-in conferencing configuration settings to be retrieved.
To refer to the global settings, use this syntax: -Identity global.
To refer to site settings, use syntax similar to this: -Identity site:Redmond.
You cannot use wildcards when specifying an Identity.
To do that, use the Filter parameter instead.

If called without any parameters the Get-CsDialInConferencingConfiguration cmdlet returns information about all the dial-in conferencing configuration settings in use in your organization.

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
Provides a way for you to use wildcard characters when specifying dial-in conferencing configuration settings.
For example, to return a collection of all the configuration settings that have been applied at the site scope use this syntax: -Filter "site:*".
To return all the settings that have the term "EMEA" in their Identity use this syntax: -Filter "*EMEA*".
Note that the Filter parameter acts only on the Identity of the settings; you cannot filter on other dial-in conferencing configuration properties.

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
Retrieves the dial-in conferencing data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingConfiguration


## NOTES


## RELATED LINKS

[New-CsDialInConferencingConfiguration]()

[Remove-CsDialInConferencingConfiguration]()

[Set-CsDialInConferencingConfiguration]()