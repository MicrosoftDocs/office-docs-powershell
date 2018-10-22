---
external help file: 
applicable: Project Server 2013, Project Server 2016, Project Server 2019
title: Set-SPProjectServiceApplication
schema: 2.0.0
---

# Set-SPProjectServiceApplication

## SYNOPSIS
Sets the properties of a Project Server Service application.

## SYNTAX

```
Set-SPProjectServiceApplication [-Identity] <PsiServiceApplicationPipeBind>
 [-ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPProjectServiceApplication` cmdlet sets the properties of a Project Server Service application.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### --------------------EXAMPLE---------------------
```
PS C:\>Set- SPProjectServiceApplication -Identity PSIServiceApp -ApplicationPool newapppool RegisterTimerJob
```

This example updates the application pool and re-registers the timer job for a Project Server Service application.


## PARAMETERS

### -Identity
Specifies the Project Server Service application to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Project Server service application (for example, ProjectWebApp1); or an instance of a valid PsiServiceApplication object.

```yaml
Type: PsiServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ApplicationPool
Specifies the existing IIS application pool to run the web service in for the service application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an application pool (for example, AppPoolName1); or an instance of a valid IISWebServiceApplicationPool object.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

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
