---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Get-SPEnterpriseSearchStatus
schema: 2.0.0
---

# Get-SPEnterpriseSearchStatus

## SYNOPSIS
Retrieves diagnostics information for the search components.

## SYNTAX

```
Get-SPEnterpriseSearchStatus -SearchApplication <SearchServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Component <String>] [-Constellation] [-Detailed]
 [-DetailSearchRuntime] [-HealthReport] [-JobStatus] [-Primary] [-Text] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet retrieves diagnostic information for all or specified search components in the active topology of a Search Service Application.

If you don't specify any of the optional parameters, the cmdlet will retrieve the health status of all the search components within the Search Service Application.
Each search component will have one of the following states:

- Active: The search component is running OK
- Degraded: The search component is in a status where it cannot perform all operations correctly.  The reason for the degraded status is typically a transient situation related to a restart or network issues.
- Failed: The search component is not running.  This status indicated that the component cannot perform operations correctly.
- Unknown:  The component can't be reached.  The reason for the unknown status is typically hardware or communication issues.

If you have defined more than one Index component for a partition in your search topology, this cmdlet will indicate which index component that has the Primary role for this partition.

You can use the cmdlet to output the following additional information:

- List the status of background activities (batch jobs) initiated by the search components
- List the status of background activities (batch jobs) initiated by the search components
- List detailed diagnostic information for the index component
- Debug information that may be used by Microsoft for detailed issue resolution

If you don't want to iterate over the output in a script, use the Text parameter. 
If you do not use the Text parameter, the cmdlet will output a set of objects that have the following properties:

- string Name: the name of a search component, a health report item or a constellation property
- string State: the status of the search component
- string Level: when you are using the HealthReport parameter, this property indicates the importance level of each health report item (Error, Warning, Info, Verbose)
- string Message: additional information that is provided as a text string
- ReadOnlyDictionary\<string,string\>Details: dictionary name/value pairs that provide additional diagnostic information

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).



## EXAMPLES

### ------------------EXAMPLE 1------------------ 
```
C:\PS>Get-SPEnterpriseSearchServiceApplication | Get-SPEnterpriseSearchStatus -Text
```

This example retrieves a list that has diagnostics information about all search components of the default Search Service Application.

### ------------------EXAMPLE 2------------------ 
```
C:\PS>Get-SPEnterpriseSearchStatus -SearchApplication "Search Service Application" -JobStatus -Text
```

This example retrieves the background activity job status for the search analytics timer jobs.

### ------------------EXAMPLE 3------------------ 
```
C:\PS>Get-SPEnterpriseSearchServiceApplication | Get-SPEnterpriseSearchStatus -HealthReport -Component IndexComponent1 -Text
```

This example retrieves the diagnostic information for the index component named IndexComponent1.

## PARAMETERS

### -SearchApplication
Specifies the search service application that contains the search components.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Component

Specifies the name of the search component. 
This parameter is only used in association with the HealthReport and Primary parameter.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Constellation

Specifies if internal diagnostic information for the search topology should be provided. 
This parameter should only be used for debugging.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Detailed
Specifies the level of detail for the HealthReport parameter.
When this parameter is used, the cmdlet will also output verbose diagnostic information.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DetailSearchRuntime

Specifies if internal diagnostic information for the search runtime should be provided. 
This parameter should only be used for debugging.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HealthReport

Specifies if diagnostic information for the search component should be provided. 
When using this parameter, you must specify the component name using the Component parameter.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JobStatus
Specifies if status information for the Search Analytics and Usage Analytics timer jobs should be provided.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Primary

Specifies if the Admin component has the Primary role.
When using this parameter, you must specify the component name using the Component parameter. 
Returns true if the Admin Component has the Primary role.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Text

Specifies if the print output from this cmdlet should be outputted in a format that is convenient for reading. 
If not used, this cmdlet outputs a SearchStatusInfo object.

When using this parameter, the output is printed to the console and cannot be piped to a file or another program.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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


