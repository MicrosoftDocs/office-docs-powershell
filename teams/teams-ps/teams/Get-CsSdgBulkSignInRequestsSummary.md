---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
online version:
title: Get-CsSdgBulkSignInRequestsSummary
schema: 2.0.0
---

# Get-CsSdgBulkSignInRequestsSummary

## SYNOPSIS
Get the tenant level summary of all bulk sign in requests executed in the past 30 days.

## SYNTAX

```
Get-CsSdgBulkSignInRequestsSummary [<CommonParameters>]
```

## DESCRIPTION
This cmdlet gives the overall tenant level summary of all bulk sign in requests executed for a particular tenant within the last 30 days. Status is shown at batch level as succeeded / failed.

## EXAMPLES

### Example 1
```powershell
Get-CsSdgBulkSignInRequestsSummary
```

This example shows how to run the cmdlet to get a tenant level summary.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ISdgBulkSignInRequestsSummaryResponseItem

## NOTES

## RELATED LINKS
