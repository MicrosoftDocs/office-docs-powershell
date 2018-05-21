---
external help file: 
applicable: Skype for Business Online
title: Get-CsAudioConferencingProvider
schema: 2.0.0
---

# Get-CsAudioConferencingProvider

## SYNOPSIS
Returns information about the audio conferencing providers authorized for use in the organization.
Audio conferencing providers are a third-party companies that provide organizations with conferencing services.

## SYNTAX

```
Get-CsAudioConferencingProvider [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>]
 [-LocalStore] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
An audio conferencing provider is a third-party company that provides organizations with conferencing services.
Among other things, audio conferencing providers provide a way for users located off site, and not connected to the corporate network or the Internet, to participate in the audio portion of a conference or meeting.
Audio conferencing providers often provide high-end services such as live translation, transcription, and live per-conference operator assistance.

After organizations have contracted with an audio conferencing provider, users can be assigned to the provider by using the Set-CsUserAcp cmdlet.
Administrators can retrieve information about the audio conferencing providers available to them by using the Get-CsAudioConferencingProvider cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsAudioConferencingProvider
```

The command shown in Example 1 returns information about all the audio conferencing providers available for use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsAudioConferencingProvider -Identity "Fabrikam Telecom"
```

In Example 2, information is returned for a single audio conferencing provider: the provider with the Identity Fabrikam Telecom.

### -------------------------- Example 3 --------------------------
```
Get-CsAudioConferencingProvider -Filter "*Fabrikam*"
```

Example 3 demonstrates how wildcard values (and the Filter parameter) can be used to return information about audio conferencing providers.
In this example, the filter value "*Fabrikam*" returns all audio conferencing providers that have the string value "Fabrikam" anywhere in their Identity.


## PARAMETERS

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

### -Filter
Enables you to use wildcard characters when indicating the audio conferencing provider (or providers) to be returned.
For example, this syntax returns information about all the audio conferencing providers that have the string value "fabrikam" somewhere in their Identity:

`-Filter "*fabrikam*"`

Note that you cannot use the Filter parameter and the Identity parameters in the same command.

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

### -Identity
Unique identifier for the audio conferencing provider to be returned.
For example:

`-Identity "Fabrikam Telecom"`

If neither the Identity parameter nor the Filter parameter are included in a command then the Get-CsAudioConferencingProvider cmdlet returns information for all the available providers.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
This parameter is not used with Skype for Business Online.

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

### Microsoft.Rtc.Management.WritableConfig.Settings.AudioConferencingProvider.AudioConferencingProvider#Decorated


## NOTES


## RELATED LINKS

