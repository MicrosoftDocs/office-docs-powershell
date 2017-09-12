---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPWebApplication

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Returns all Web applications that match the given criteria.



## SYNTAX

```
Get-SPWebApplication [[-Identity] <SPWebApplicationPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-IncludeCentralAdministration] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPWebApplication cmdlet returns all Web applications that match the scope given by the Identity parameter.
The Identity can be the name of the name, URL, or GUID of the Web application.
If no Identity is specified, all Web applications are returned.

The Central Administration Web application is only returned if its exact identity is provided or the IncludeCentralAdministration flag is provided.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1---------------------- (SharePoint Server 2013)
```
C:\PS>$w = Get-SPWebApplication http://sitename
```

This example gets the Web application for http://sitename and stores it in a variable.

### ------------------EXAMPLE 1---------------------- (SharePoint Server 2016)
```
C:\PS>$w = Get-SPWebApplication http://sitename
```

This example gets the Web application for http://sitename and stores it in a variable.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPWebApplication -IncludeCentralAdministration | Where { $_.DefaultServerComment -eq "SharePoint Central Administration v4"} | Format-List *
```

This example displays all public properties on the SharePoint Central Administration Web application in list format.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPWebApplication -IncludeCentralAdministration | Where { $_.DefaultServerComment -eq "SharePoint Central Administration v4"} | Format-List *
```

This example displays all public properties on the SharePoint Central Administration Web application in list format.

## PARAMETERS

### -Identity
Specifies the name, URL, or GUID of the Web application.

The type must be a valid URL, in the form http://server_name; a GUID, in the form 1234-5678-9876-0987; or a valid name, in the form SPWebApplication - 1212.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IncludeCentralAdministration
Includes the Central Administration Web application in the collection of Web applications that can be returned.
The IncludeCentral Administration parameter must still meet any other filters provided.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

