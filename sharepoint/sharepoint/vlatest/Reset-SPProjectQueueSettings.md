---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Reset-SPProjectQueueSettings

## SYNOPSIS
Resets all Project Server Queue settings to their default values for a specific Project Server Service Application.

## SYNTAX

```
Reset-SPProjectQueueSettings [-ServiceApplication <PsiServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
Resets all Project Server Queue settings to their default values for a specific Project Server Service Application.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### --------------------EXAMPLE--------------------- (SharePoint Server 2016)
```
C:\PS>Reset-SPProjectQueueSettings -ServiceApplication "Project Service Application"
```

This example resets the queue settings for the "Project Service Application" service application.

## PARAMETERS

### -ServiceApplication
Specifies the Project Server service application to target.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name for a Project Server service application (for example, ProjectServiceApp1); or an instance of a valid PsiServiceApplication object.

```yaml
Type: PsiServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: sa

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
@{Text=}

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-SPProjectQueueSettings]()

[Get-SPProjectQueueSettings]()

