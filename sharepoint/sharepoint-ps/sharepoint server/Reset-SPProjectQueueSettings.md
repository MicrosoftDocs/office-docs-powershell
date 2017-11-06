---
external help file: 
applicable: SharePoint Server 2016
schema: 2.0.0
---

# Reset-SPProjectQueueSettings

## SYNOPSIS
Resets all Project Server Queue settings to their default values for a specific Project Server Service Application.


## SYNTAX

```
Reset-SPProjectQueueSettings [-ServiceApplication <PsiServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Resets all Project Server Queue settings to their default values for a specific Project Server Service Application.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).


## EXAMPLES

### --------------------EXAMPLE---------------------
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
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-SPProjectQueueSettings]()

[Get-SPProjectQueueSettings]()
