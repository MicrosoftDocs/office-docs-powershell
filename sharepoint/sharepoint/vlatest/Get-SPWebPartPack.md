---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPWebPartPack

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Get-SPWebPartPack [[-Identity] <String>] [-AssignmentCollection <SPAssignmentCollection>] [-GlobalOnly]
 [-WebApplication <SPWebApplicationPipeBind>]
```

## DESCRIPTION
The Get-SPWebPartPack cmdlet returns the installed Web Part packages that match the Identity parameter.
The scope of results can be narrowed by using the optional WebApplication parameter.
The scope does not include any Web Part packages installed in the global assembly cache (GAC) unless the GlobalOnly parameter is used.
If this parameter is used, only Web Part packages that have been installed in the GAC are returned.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
C:\PS>Get-SPWebPartPack -WebApplication http://zsharepoint2:80
```

This example returns all Web Part packages that have been installed on the Web application on port 80 in local farm.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Get-SPWebPartPack -WebApplication http://zsharepoint2:80
```

This example returns all Web Part packages that have been installed on the Web application on port 80 in local farm.

## PARAMETERS

### -Identity
Specifies the full or partial name of the Web Part package from the configuration database.

The type must be a valid name of a Web Part package; for example, MyWebPartPackage.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
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
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### -GlobalOnly
Returns only Web Part packages that are installed in the global assembly cache (GAC).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Specifies the Web application from which to list Web Part packages.
If no Web application is specified, the specified Web Part packages will be returned from all Web applications.

```yaml
Type: SPWebApplicationPipeBind
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

