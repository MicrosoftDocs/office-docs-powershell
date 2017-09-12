---
external help file: 
applicable: SharePoint Server 2016
schema: 2.0.0
---

# New-SPProjectServiceApplicationProxy

## SYNOPSIS
Creates a proxy for a Project Server Service application.

## SYNTAX

```
New-SPProjectServiceApplicationProxy [-Name] <String> -ServiceApplication <PsiServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The New-SPProjectServiceApplicationProxy cmdlet creates a proxy for a Project Server Service application.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### -------------------EXAMPLE 1------------------ (SharePoint Server 2016)
```
C:\PS>New-SPProjectServiceApplicationProxy -Name PsiApplicationProxy -ServiceApplication PsiApplication
```

This example creates a Project Server Service application proxy with the name PsiApplicationProxy for the application PsiApplication.

### -------------------EXAMPLE 2------------------ (SharePoint Server 2016)
```
C:\PS>Get-SPServiceApplication | ?{ $_.Name -eq "PsiApplication" } | New-SPProjectServiceApplicationProxy -Name "PsiApplicationProxy" -Default
```

This example creates a Project Server Service application proxy with the name PsiApplicationProxy for the application PsiApplication and adds the proxy to the Default proxy group.

## PARAMETERS

### -Name
Specifies the name of the new proxy.

The type must be a valid name of a Project Server Service application proxy; for example, ProjectSvcProxy1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceApplication
Specifies the Project Server Service application to associate with the new proxy.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Project Server service application (for example, ProjectWebApp1); or an instance of a valid PsiServiceApplication object.

```yaml
Type: PsiServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: sa
Applicable: SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

