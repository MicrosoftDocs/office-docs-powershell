---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2258762
schema: 1.0.0
---

# Remove-ScannerContentScan

## SYNOPSIS
Delete a content scan job.

## SYNTAX

```
Remove-ScannerContentScan [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Deletes an entire Microsoft Purview Information Protection scanner content scan job.

> [!CAUTION]
> Deleting the content scan job means that the configured repositories may not be scanned again, unless they are configured for a different content scan job.
> 

For more information about content scan jobs, see the [Microsoft Purview Information Protection scanner documentation](/information-protection/deploy-aip-scanner-configure-install#create-a-content-scan-job).


## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-ScannerContentScan
```

This command remove the content scan job.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

- [Add-ScannerRepository](Add-ScannerRepository.md)

- [Get-ScannerContentScan](Get-ScannerContentScan.md)

- [Get-ScannerRepository](Get-ScannerRepository.md)

- [Remove-ScannerRepository](Remove-ScannerRepository.md)

- [Set-ScannerContentScan](Set-ScannerContentScan.md)

- [Set-ScannerRepository](Set-ScannerRepository.md)