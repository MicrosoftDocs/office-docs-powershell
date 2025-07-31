---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/get-cshybridtelephonenumber
schema: 2.0.0
title: Get-CsHybridTelephoneNumber
---

# Get-CsHybridTelephoneNumber

## SYNOPSIS
This cmdlet displays information about one or more hybrid telephone numbers.

## SYNTAX

### Get1 (Default)
```
Get-CsHybridTelephoneNumber [-Break] [-HttpPipelineAppend <SendAsyncStep[]>]
 [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>] [-ProxyCredential <PSCredential>]
 [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### Get
```
Get-CsHybridTelephoneNumber -TelephoneNumber <String> [-Break] [-HttpPipelineAppend <SendAsyncStep[]>]
 [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>] [-ProxyCredential <PSCredential>]
 [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### GetViaIdentity
```
Get-CsHybridTelephoneNumber -InputObject <IConfigApiBasedCmdletsIdentity> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

## DESCRIPTION

> [!IMPORTANT]
> This cmdlet is being deprecated. Use the **Get-CsPhoneNumberAssignment** cmdlet to display information about one or more phone numbers. Detailed instructions on how to use the new cmdlet can be found at [Get-CsPhoneNumberAssignment](/powershell/module/teams/get-csphonenumberassignment)

This cmdlet displays information about one or more hybrid telephone numbers used for Audio Conferencing with Direct Routing for GCC High and DoD clouds.

Returned results are sorted by telephone number in ascending order.

## EXAMPLES

### Example 1
```powershell
Get-CsHybridTelephoneNumber -TelephoneNumber 14025551234
```
```output
Id              O365Region SourceType TargetType TelephoneNumber UserId
--              ---------- ---------- ---------- --------------- ------
14025551234    NOAM       Hybrid                14025551234     00000000-0000-0000-0000-000000000000
```
This example displays information about the phone number +1 (402) 555-1234.

### Example 2
```powershell
Get-CsHybridTelephoneNumber
```
```output
Id              O365Region SourceType TargetType TelephoneNumber UserId
--              ---------- ---------- ---------- --------------- ------
14025551234                Hybrid                14025551234
14025551235                Hybrid                14025551235
```
This example displays information about all hybrid telephone numbers in the tenant. Note that O365Region, TargetType, and UserId will not be populated.

## PARAMETERS

### -Break
{{ Fill Break Description }}

```yaml
Type: System.Management.Automation.SwitchParameter
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
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Runtime.SendAsyncStep[]
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
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Runtime.SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject
The identity parameter.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConfigApiBasedCmdletsIdentity
Parameter Sets: GetViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Proxy
{{ Fill Proxy Description }}

```yaml
Type: System.Uri
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
Type: System.Management.Automation.PSCredential
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
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneNumber

> Applicable: Microsoft Teams

Filters the returned results to a specific phone number. The number should be specified without a prefixed "+". The phone number can't have "tel:" prefixed.

```yaml
Type: System.String
Parameter Sets: Get
Aliases:

Required: True
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

### None

## NOTES
The cmdlet is available in Teams PowerShell module 4.5.0 or later.

The cmdlet is only available in GCC High and DoD cloud instances.

## RELATED LINKS
[New-CsHybridTelephoneNumber](https://learn.microsoft.com/powershell/module/teams/new-cshybridtelephonenumber)

[Remove-CsHybridTelephoneNumber](https://learn.microsoft.com/powershell/module/teams/remove-cshybridtelephonenumber)
