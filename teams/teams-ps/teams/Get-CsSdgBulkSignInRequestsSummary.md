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
Get-CsSdgBulkSignInRequestsSummary
 [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>]
 [-HttpPipelinePrepend <SendAsyncStep[]>]
 [-ProgressAction <ActionPreference>]
 [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>]
 [-ProxyUseDefaultCredentials]
 [<CommonParameters>]
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

### -Break
{{ Fill Break Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelineAppend
{{ Fill HttpPipelineAppend Description }}

```yaml
Type: SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelinePrepend
{{ Fill HttpPipelinePrepend Description }}

```yaml
Type: SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Proxy
{{ Fill Proxy Description }}

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyCredential
{{ Fill ProxyCredential Description }}

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyUseDefaultCredentials
{{ Fill ProxyUseDefaultCredentials Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProgressAction
{{ Fill ProgressAction Description }}

```yaml
Type: ActionPreference
Parameter Sets: (All)
Aliases: proga

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ISdgBulkSignInRequestsSummaryResponseItem

## NOTES

## RELATED LINKS
