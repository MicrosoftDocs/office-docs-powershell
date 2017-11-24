---
external help file: 
applicable: SharePoint Server 2016
title: Test-SPProjectServiceApplication
schema: 2.0.0
---

# Test-SPProjectServiceApplication

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

```
Test-SPProjectServiceApplication [-Identity] <PsiServiceApplicationPipeBind>
 [[-Rule] <ProjectServiceApplicationHealthRuleName>] [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### ---------------EXAMPLE--------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -AssignmentCollection
{{Fill AssignmentCollection Description}}

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Identity
{{Fill Identity Description}}

```yaml
Type: PsiServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Rule
{{Fill Rule Description}}

```yaml
Type: ProjectServiceApplicationHealthRuleName
Parameter Sets: (All)
Aliases: 
Accepted values: All, QueueServiceInternalState, QueueInFlightJobs, CalcServiceWorkerState, DatabasePermissions
Applicable: SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Office.Project.Server.Cmdlet.PsiServiceApplicationPipeBind
Microsoft.Office.Project.Server.HealthRules.ProjectServiceApplicationHealthRuleName
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

