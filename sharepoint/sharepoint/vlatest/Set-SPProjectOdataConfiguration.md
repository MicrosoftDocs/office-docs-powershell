---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPProjectOdataConfiguration

## SYNOPSIS
Sets the properties for how the OData service is configured for an instance of Project Web App.

## SYNTAX

```
Set-SPProjectOdataConfiguration [-AcceptCountRequests <Boolean>] [-AcceptProjectionRequests <Boolean>]
 [-AssignmentCollection <SPAssignmentCollection>] [-ClearEntityPageSizeOverrides] [-DefaultMaxPageSize <Int32>]
 [-EntitySetName <String>] [-MaxResultsPerCollection <Int32>] [-PageSizeOverride <Int32>]
 [-UseVerboseErrors <Boolean>]
```

## DESCRIPTION
The Set-SPProjectOdataConfiguration cmdlet sets the settings for how the OData service is configured for an instance of Project Web App.
It allows the user to configure the settings for a list of parameters that specify paging, the enabling of various querying functionality, whether MaxResultsPerCollection has been enabled, and whether verbose errors are enabled.
Paging can be specified per entity.
If no paging overrides exist for a given entity, the DefaultMaxPageSize parameter is used. 
MaxResultsPerCollection cannot be used in conjunction with paging.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### ----------------------EXAMPLE----------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPProjectOdataConfiguration -ClearEntityPageSizeOverrides
```

This example clears any page size overrides that have been set for any specific entities.

### ----------------------EXAMPLE 1----------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPProjectOdataConfiguration -AcceptProjectionRequests $true
```

This example sets AcceptProjectionRequests to true.

### ----------------------EXAMPLE 2----------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPProjectOdataConfiguration -DefaultMaxPageSize 50
```

This example sets the default maximum page size to 50 rows.

### ----------------------EXAMPLE 3----------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPProjectOdataConfiguration -EntitySetName Assignments -PageSizeOverride 100
```

This example sets the page size override for the Assignments entity.

## PARAMETERS

### -AcceptCountRequests
Sets whether requests with the $count path segment or the $inlinecount query options are accepted.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptProjectionRequests
Sets whether projection requests should be accepted. 
Projection requests are made by using the $select query option.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 

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

### -ClearEntityPageSizeOverrides
Clears all page-size overrides that had been set for any entities.

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

### -DefaultMaxPageSize
Sets the default page size. 
This is used for any entities that do not have an override set using the PageSizeOverride parameter.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntitySetName
Specifies the entity name that is used to set a page size override with PageSizeOverride.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxResultsPerCollection
Sets the integer value that indicates the maximum number of results per entity.
This parameter cannot be used in conjunction with paging.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSizeOverride
Overrides the page size that is used for a specific entity.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseVerboseErrors
Sets the service to use more verbose error messages (for example, stack trace).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

