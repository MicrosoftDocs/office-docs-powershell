---
external help file: 
applicable: Skype for Business Online
title: Set-CsOnlineDialInConferencingServiceNumber
schema: 2.0.0
---

# Set-CsOnlineDialInConferencingServiceNumber

## SYNOPSIS
Use the `Set-CsOnlineDialInConferencingServiceNumber` cmdlet to modify the properties of a dial-in or audio conferencing service number that is used by callers when they dial in to a meeting.

## SYNTAX

```
Set-CsOnlineDialInConferencingServiceNumber [[-Identity] <Object>] [[-Instance] <Object>]
 [-BypassDualWrite <Object>] [-Confirm] [-DomainController <Object>] [-Force] [-PrimaryLanguage <Object>]
 [-RestoreDefaultLanguages] [-SecondaryLanguages <Object>] [-Tenant <Object>] [-WhatIf] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
The `Set-CsOnlineDialInConferencingServiceNumber` cmdlet enables you to set the primary and secondary languages or restore the default languages for a given service number.
The primary language will be used for the prompts that callers will listen to when they are entering a meeting.
The secondary languages (up to 4) will be available as options in the case the caller wants the prompts read in a different language.
The following languages are supported for PSTN conferencing:

Arabic

Chinese (Simplified)

Chinese (Traditional)

Danish

Dutch

English (Australia)

English (United Kingdom)

English (United States)

Finnish

French (Canada)

French (France)

German

Hebrew

Italian

Japanese

Korean

Norwegian (Bokmal)

Portuguese

Russian

Spanish (Mexico)

Spanish (Spain)

Swedish

Turkish

Ukrainian

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineDialInConferencingServiceNumber -Identity +14255551234 -PrimaryLanguage de-de -SecondaryLanguages en-us, ja-jp, en-gb
```

This example sets the primary language to German (Germany) and the secondary languages to US English, Japanese, and UK English for the dial-in service number +14255551234.


## PARAMETERS

### -Identity
Specifies the default dial-in service number string.
The service number can be specified in the following formats: E.164 number, +\<E.164 number\> and tel:\<E.164 number\>.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to the Office 365 audio service number object to the cmdlet rather than set individual parameter values.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
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

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

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
Specifies the domain controller that's used by the cmdlet to read or write the specified data.
Valid inputs for this parameter include:

Fully qualified domain name (FQDN): -DomainController atl-cs-001.Contoso.com.

Computer name: -DomainController atl-cs-001

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
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

### -PrimaryLanguage
Specifies the primary language that is used when users call into a meeting.
The culture ID is used.
For example, en-US for US English, ja-JP for Japanese, or es-ES for Spanish.

Use the `Get-CsOnlineDialInConferencingLanguagesSupported` cmdlet to get a list of the available languages.

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

### -RestoreDefaultLanguages
Including this switch restores all of the default languages for the audio conferencing service number.

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

### -SecondaryLanguages
Specifies the secondary languages that can be used when users call into a meeting.
The culture ID is used.
For example, en-US for US English, ja-JP for Japanese, or es-ES for Spanish.
The order you provide will be the order that will be presented to users that are calling into the meeting.
There is a maximum of 4 languages that can be used as secondary languages.

Use the `Get-CsOnlineDialInConferencingLanguagesSupported` cmdlet to get a list of the available languages.

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
This parameter is reserved for internal Microsoft use.

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
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

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
