---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2258497
schema: 1.0.0
---

# Clear-Authentication

## SYNOPSIS
Clears the user settings and RMS templates for the current user.

## SYNTAX

```
Clear-Authentication [<CommonParameters>]
```

## DESCRIPTION
The Clear-AIPAuthentication cmdlet resets the user settings for the Azure Rights Management service. 

- Files in **%LocalAppData%\Microsoft\MSIP\AppDetails** are not deleted if you authenticate by using a token from Azure AD when you run Set-Authentication.

- All Rights Management templates from the **%LocalAppData%\Microsoft\MSIPC\msip** folder are deleted for the current user. 

- Rights Management templates are not deleted from the **%LocalAppData\Microsoft\MSIPC** folder that Office uses.

For a list of files and registry entries that are deleted, see the the details about the **Reset Settings** option in the following admin guides:

## EXAMPLES

### Example 1
```
PS C:\> Clear-Authentication
```

This command is functionally the equivalent of selecting the **Reset Settings** from the Help and Feedback menu option, and deleting the templates.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. 

For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-Authentication](Set-Authentication.md)