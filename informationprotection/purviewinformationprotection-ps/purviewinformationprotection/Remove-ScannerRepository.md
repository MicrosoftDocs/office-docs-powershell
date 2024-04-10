---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2258956
schema: 1.0.0
---

# Remove-ScannerRepository

## SYNOPSIS
Removes a repository from an Microsoft Purview Information Protection scanner content scan job.

## SYNTAX

```
Remove-ScannerRepository
 [-Repositories] <System.Collections.Generic.List`1[Microsoft.InformationProtection.Powershell.AIP.Commandlets.Scanner.MoonCake.RepositoryInfo]>
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Deletes any repositories described by the **Repositories** parameter, or returned by a piped [Get-ScannerRepository](Get-ScannerRepository.md) cmdlet.

For more information about content scan jobs, see the [Microsoft Purview Information Protection on-premises scanner documentation](/information-protection/deploy-aip-scanner-configure-install#create-a-content-scan-job).

## EXAMPLES

### Example 1 Remove all repositories configured for your content scan job
```powershell
PS C:\WINDOWS\system32> Get-ScannerRepository | Remove-ScannerRepository
```

This example shows a fully piped cmdlet, where the repositories are first returned, and then deleted.

### Example 2 Remove a specific repository from your content scan job
```powershell
PS C:\WINDOWS\system32> Get-ScannerRepository -Path 'c:\repoToScan1' | Remove-ScannerRepository
```

This example shows a fully piped cmdlet, where the repository is first returned, and then deleted.

### Example 3 Remove any repositories that match a specific wildcard pattern from your content scan job
```powershell
PS C:\WINDOWS\system32> Get-ScannerRepository -Path 'c:\repo*' | Remove-ScannerRepository
```

This example shows a fully piped cmdlet, where the repositories are first returned, and then deleted.

### Example 4 Remove a specific repository from your content scan job without piping
```powershell
PS C:\WINDOWS\system32> $repos = Get-ScannerRepository -Path 'c:\repoToScan1'
PS C:\WINDOWS\system32> Remove-ScannerRepository $repos
```

This example shows a fully piped cmdlet, where the repositories are first returned, and then deleted.

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

### -Repositories
Describes the repositories you want to delete.

```yaml
Type: System.Collections.Generic.List`1[Microsoft.InformationProtection.Powershell.AIP.Commandlets.Scanner.MoonCake.RepositoryInfo]
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
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

### System.Collections.Generic.List`1[[Microsoft.InformationProtection.Powershell.AIP.Commandlets.Scanner.MoonCake.RepositoryInfo, AIP, Version=2.9.0.0, Culture=neutral, PublicKeyToken=null]]

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

- [Add-ScannerRepository](Add-ScannerRepository.md)

- [Get-ScannerContentScan](Get-ScannerContentScan.md)

- [Get-ScannerRepository](Get-cannerRepository.md)

- [Remove-ScannerContentScan](Remove-ScannerContentScan.md)

- [Set-ScannerContentScan](Set-ScannerContentScan.md)

- [Set-ScannerRepository](Set-ScannerRepository.md)