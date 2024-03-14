---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/skype/get-csonlinedialinconferencinglanguagessupported
schema: 2.0.0
---

# Get-CsOnlineDialinConferencingLanguagesSupported

## SYNOPSIS
Use the Get-CsOnlineDialInConferencingLanguagesSupported cmdlet to view the list of languages that are supported when an organization uses Microsoft as the dial-in audio conferencing provider.

## SYNTAX

```
Get-CsOnlineDialinConferencingLanguagesSupported [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOnlineDialInConferencingLanguagesSupported cmdlet is used to view the primary and secondary languages that are set for a dial-in conferencing service number.
There is a primary language that is set along with secondary languages (up to 4) that can also be set.

Primary and secondary languages are those languages that are used to play prompts when a caller calls into a dial-in service number.
When no languages are specified for a dial-in service number it will get the set of default languages.

## EXAMPLES

### Example 1
```
Get-CsOnlineDialInConferencingLanguagesSupported | fl
```

This example allows returns the list of supported languages when you are using Microsoft as your dial-in audio conferencing provider and displays them in a formatted list.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
