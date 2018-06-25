---
external help file: 
applicable: Skype for Business Online
title: Set-CsOnlineDialInConferencingUserDefaultNumber
schema: 2.0.0
---

# Set-CsOnlineDialInConferencingUserDefaultNumber

## SYNOPSIS
This cmdlet identifies a group of users based on a given criteria and changes the Audio Conferencing default number of all the users in the group to a new default number.

## SYNTAX

```
Set-CsOnlineDialInConferencingUserDefaultNumber [-BridgeId <Object>] [-BridgeName <Object>]
 [-CountryOrRegion <Object>] [-FromNumber <Object>] [-NumberType <Object>] [-ToNumber <Object>]
 [-AreaOrState <Object>] [-BypassDualWrite <Object>] [-CapitalOrMajorCity <Object>] [-Confirm]
 [-DomainController <Object>] [-Force] [-RescheduleMeetings] [-Tenant <Object>] [-TenantDomain <Object>]
 [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet identifies a group of users based on the location of the users or their Audio Conferencing default number and replaces their Audio Conferencing default number with the new number provided in the input. 
This cmdlet can be used to replace Audio Conferencing default toll and toll-free numbers.
To use this cmdlet, specify the criteria that will be used to find the desired group of users, specify the type of default phone number to modify and specify the new Audio Conferencing default number that needs to be assigned to the users that are found with the criteria specified.
Optionally, it’s possible to trigger the rescheduling of the existing meetings of the group of users to include the new Audio Conferencing default numbers in the meeting invites of their existing meeting. If the meetings of the users aren’t rescheduled, their existing meetings will continue to have their previous Audio Conferencing default numbers and new meetings will have the new Audio Conferencing default number. Please note that rescheduling the existing meetings of the users will result in having the meeting invites of all their existing meetings resent to all the participants of their existing meetings.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineDialInConferencingUserDefaultNumber -FromNumber +14255551234 -ToNumber +12065555678 NumberType TollFree -BridgeId <Bridge Id> -RescheduleMeetings
```

To change the default toll number of all users that have +14255551234 as their default toll-free number to +12065555678, run example 1.

### -------------------------- Example 2 --------------------------
```
Set-CsOnlineDialInConferencingUserDefaultNumber -FromNumber $null -ToNumber +18005551234 -NumberType TollFree -BridgeId <Bridge Id>
```

Example 2 shows how to set the default toll-free number for all users without one to +18005551234.

### -------------------------- Example 3 --------------------------
```
Set-CsOnlineDialInConferencingUserDefaultNumber -FromNumber +18005551234 -ToNumber +18005551239 NumberType TollFree -BridgeId <Bridge Id>
```

Example 3 shows how to change the default toll-free number of all users that have +18005551234 as their default toll-free number to +18005551239.

### -------------------------- Example 4 --------------------------
```
Set-CsOnlineDialInConferencingUserDefaultNumber -Country US -ToNumber +18005551234 -NumberType TollFree -BridgeId <Bridge Id>
```

Example 3 shows how to set the default toll-free number of all users located in the U.S. to +18005551234.

## PARAMETERS

### -BridgeId
Specifies the Audio Conferencing bridge that will be used to scope the search of the users that match the input criteria. When the cmdlet is run, the cmdlet will find all of the users that are assigned to the specified bridge that match the given criteria.

PARAMVALUE: Guid

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

### -BridgeName
Specifies the Audio Conferencing bridge that will be used to scope the search of the users that match the input criteria. When the cmdlet is run, the cmdlet will find all of the users that are assigned to the specified bridge that match the given criteria.

PARAMVALUE: String

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

### -CountryOrRegion
This parameter instructs the cmdlet to make the requested modifications to all the users that are assigned to the specified Audio Conferencing bridge and for which their Office 365 country or region matches the input provided in this parameter.

PARAMVALUE: String

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

### -FromNumber
This parameter instructs the cmdlet to make the requested modifications to all the users that are assigned to the specified Audio Conferencing bridge and for which their original default phone number matches the phone number provided in this parameter.

PARAMVALUE: String

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

### -NumberType
This parameter specifies the type of phone numbers that are specified as part of the search criteria.

PARAMVALUE: String

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

### -ToNumber
This parameter instructs the cmdlet to set the input provided in this parameter as the default number of all the users in the specified Audio Conferencing bridge that match the search criteria.

PARAMVALUE: String

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

### -AreaOrState
This parameter instructs the cmdlet to make the requested modifications to all the users that are assigned to the specified Audio Conferencing bridge and for which their Office 365 area or state matches the input provided in this parameter.

PARAMVALUE: String

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

### -BypassDualWrite
PARAMVALUE: $true | $false

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

### -CapitalOrMajorCity
This parameter instructs the cmdlet to make the requested modifications to all the users that are assigned to the specified Audio Conferencing bridge and for which their Office 365 capital or major city matches the input provided in this parameter.

PARAMVALUE: String

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

### -Confirm
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
PARAMVALUE: Fqdn

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
PARAMVALUE: SwitchParameter

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

### -RescheduleMeetings
This parameter instructs the cmdlet to trigger the meeting migration service for all users that will have their default numbers modified by the cmdlet. Please take into consideration the potential side effects of triggering the meeting migration service for users in your organization. For additional details see, [Setting up the Meeting Migration Service (MMS)](https://docs.microsoft.com/en-us/SkypeForBusiness/audio-conferencing-in-office-365/setting-up-the-meeting-migration-service-mms?redirectSourcePath=%252fen-us%252farticle%252fSetting-up-the-Meeting-Migration-Service-MMS-031f09c0-9d2a-487a-b6db-b5d4bed6d16a).

PARAMVALUE: SwitchParameter

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

### -Tenant
PARAMVALUE: Guid

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

### -TenantDomain
PARAMVALUE: String

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

### -WhatIf
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

## OUTPUTS

## NOTES

## RELATED LINKS
