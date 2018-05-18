---
external help file: 
title: Get-CsOnlineDialInConferencingLanguagesSupported
schema: 2.0.0
---

# Get-CsOnlineDialInConferencingLanguagesSupported

## SYNOPSIS
Use the Get-CsOnlineDialInConferencingLanguagesSupported cmdlet to view the list of languages that are supported when an organization uses Microsoft as the dial-in audio conferencing provider.

## SYNTAX

```
Get-CsOnlineDialInConferencingLanguagesSupported [-BypassDualWrite <Object>] [-DomainController <Object>]
 [-Force] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOnlineDialInConferencingLanguagesSupported cmdlet is used to view the primary and secondary languages that are set for a dial-in conferencing service number.
There is a primary language that is set along with secondary languages (up to 4) that can also be set.

Primary and secondary languages are those languages that are used to play prompts when a caller calls into a dial-in service number.
When no languages are specified for a dial-in service number it will get the set of default languages.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineDialInConferencingLanguagesSupported |fl
```

This example allows returns the list of supported languages when you are using Microsoft as your dial-in audio conferencing provider and displays them in a formatted list.



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

### -DomainController
Specifies the domain controller that's used by the cmdlet to read or write the specified data.
Valid inputs for this parameter include:

Fully qualified domain name (FQDN): `-DomainController atl-cs-001.Contoso.com`

Computer name: `-DomainController atl-cs-001`

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

