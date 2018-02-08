---
external help file: 
applicable: Skype for Business Online
title: Set-CsOnlineVoicemailPolicy
schema: 2.0.0
---

# Set-CsOnlineVoicemailPolicy

## SYNOPSIS
Modifies an existing Online Voicemail policy. Online Voicemail policies determine whether or not voicemail transcription and profanity masking for the voicemail transcriptions are enabled for a user.

## SYNTAX

```
Set-CsOnlineVoicemailPolicy [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm]
 [-EnableTranscription <Object>] [-EnableTranscriptionProfanityMasking <Object>] [-Force] [-Instance <Object>] [-Tenant <Object>] [-WhatIf] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
Online Voicemail service provides organizations with voicemail deposit capabilities for Phone System implementation.

By default, users enabled for Phone System will be enabled for Online Voicemail, and Online Voicemail policy controls whether or not voicemail transcription and profanity masking for the voicemail transcriptions are enabled for a user. Both Online Voicemail transcription and profanity masking are enabled by default, and you can modify existing policies to match your organization's requirements.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Insert example commands for example 1.
```

Insert descriptive text for example 1.


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

### -EnableTranscription
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

### -EnableTranscriptionProfanityMasking
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

### -Identity
PARAMVALUE: XdsIdentity

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

### -Instance
PARAMVALUE: PSObject

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
