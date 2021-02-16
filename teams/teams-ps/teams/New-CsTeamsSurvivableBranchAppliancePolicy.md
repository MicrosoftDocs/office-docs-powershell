---
external help file: tmp_ve4vjjze.cwo-help.xml
Module Name: tmp_ve4vjjze.cwo
online version:
schema: 2.0.0
---

# New-CsTeamsSurvivableBranchAppliancePolicy

## SYNOPSIS
Creates a new Teams Survivable Branch Appliance Policy.

## SYNTAX

```
New-CsTeamsSurvivableBranchAppliancePolicy [-WhatIf] [-BranchApplianceFqdns <Object>] [-Confirm]
 [[-Identity] <Object>] [-Tenant <Object>] [-InMemory] [-Force] [-AsJob]
```

## DESCRIPTION
Creates a new Teams Survivable Branch Appliance Policy.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsSurvivableBranchAppliancePolicy -Identity SBAPolicy -BranchApplianceFqdns sba.contoso.com
```

Creates a new Teams Survivable Branch Appliance Policy including sba.contoso.com.

## PARAMETERS

### -BranchApplianceFqdns
List of Branch Appliance FQDNs. They need to be already created using https://docs.microsoft.com/powershell/module/teams/New-CsTeamsSurvivableBranchAppliance.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -Force
Suppresses all non-fatal errors.

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

### -Identity
The name of the Teams Survivable Branch Appliance Policy.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
The InMemory parameter creates an object reference without actually committing the object as a permanent change.

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

### -Tenant
Internal Microsoft Use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

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

### -AsJob
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-7.1) and [about_Remote_Jobs](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-7.1).

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

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
