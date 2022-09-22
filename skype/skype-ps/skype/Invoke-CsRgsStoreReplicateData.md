---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/invoke-csrgsstorereplicatedata
applicable: Skype for Business Server 2019
title: Invoke-CsRGSStoreReplicateData
schema: 2.0.0
manager: rogupta
author: hirenshah1
ms.author: hirshah
ms.reviewer:
---

# Invoke-CsRGSStoreReplicateData

## SYNOPSIS
Replicate existing RGS data present on the specified pool to the backup tables so that data can be picked up by RGSBackupService.

## SYNTAX

```
Invoke-CsRGSStoreReplicateData -PoolFqdn <Fqdn> [-Force] [<CommonParameters>]
```

## DESCRIPTION
The Invoke-CsRGSStoreReplicateData cmdlet enables administrators to replicate existing RGS data(RGS entities created before CU1 installation) present on the specified pool to the backup tables so that data can be picked by backupservice. Backup service will sync RGS data to the paired pool if RGSBackupSerice in enabled.
Skype for Business Server Control Panel: The functions carried out by the Invoke- CsRGSStoreReplicateData cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### Example 1
```
Invoke-CsRGSStoreReplicateData -PoolFqdn "atl-cs-001.litwareinc.com"
```

The command shown in Example 1 replicates the RGS data for the pool atl-cs-001.litwareinc.com to the back up table.

## PARAMETERS

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PoolFqdn
Fully qualified domain name of the pool whose data will be replicated.
For example:
`-PoolFqdn "atl-cs-001.litwareinc.com"`

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: True
Position: Named
Default value: None
Accept pipeline input: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None. The Invoke-CsRGSStoreReplicateData cmdlet does not accept pipelined data.

## OUTPUTS

### None.

## RELATED LINKS
