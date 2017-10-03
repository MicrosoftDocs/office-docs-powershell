---
external help file: 
applicable: SharePoint Server 2016
schema: 2.0.0
---

# New-SPProjectServiceApplication

## SYNOPSIS
Creates a new Project Server Service application.


## SYNTAX

```
New-SPProjectServiceApplication [-Name] <String> -ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Proxy] [<CommonParameters>]
```

## DESCRIPTION
The `New-SPProjectServiceApplication` cmdlet creates a new Project Server Service application.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).


## EXAMPLES

### ------------------EXAMPLE 1-----------------------
```
C:\PS>New-SPProjectServiceApplication -Name "PsiApplication" -ApplicationPool "PsiApplicationPool" -Proxy
```

This example creates a Project Server Service application with the name PsiApplication and an application pool with the name PsiApplicationPool and it creates a Project Server Service application proxy for the application.


### ------------------EXAMPLE 2-----------------------
```
C:\PS>Get-SPIisWebServiceApplicationPool "PsiApplicationPool" | New-SPProjectServiceApplication -Name "PsiApplication"
```

This example creates a Project Server Service application with the name PsiApplication.
The result is piped using an application pool object.


## PARAMETERS

### -ApplicationPool
Specifies the existing IIS application pool to run the Web service in for the new service application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an application pool (for example, AppPoolName1); or an instance of a valid IISWebServiceApplicationPool object.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Specifies the name of the new Project Server Service application.

The type must be a valid name of a Project Server Service application; for example, ProjectWebApp1.

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
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Proxy
Specifies that a proxy for new service application is automatically created.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
