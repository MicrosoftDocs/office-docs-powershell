---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: New-SPEnterpriseSearchSecurityTrimmer
schema: 2.0.0
---

# New-SPEnterpriseSearchSecurityTrimmer

## SYNOPSIS
Adds a custom security trimmer to a shared search application.


## SYNTAX

```
New-SPEnterpriseSearchSecurityTrimmer [-Id] <Int32> [-RulePath <String>]
 -SearchApplication <SearchServiceApplicationPipeBind> -TypeName <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Properties <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new object to configure the security trimmer.
SPEnterpriseSearchSecurityTrimmer represents a security trimmer that performs customized security trimming of search results at query time, when the results are returned to the user.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$searchapp = Get-SPEnterpriseSearchServiceApplication
New-SPEnterpriseSearchSecurityTrimmer -SearchApplication $searchapp -TypeName "SearchCustomSecurityTrimmer.CustomSecurityTrimmerPost, SearchCustomSecurityTrimmer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=48e046c834625a88, processorArchitecture=MSIL" -Id 1
```

This example adds a new custom security trimmer for trimming the returned result set.
This new security trimmer is added to the search application by using the id 1.
The strong named assembly contains the class CustomSecurityTrimmerPost, which implements the ISecurityTrimmerPost interface.


## PARAMETERS

### -Id
Specifies the identity of the security trimmer to use for the specified search application.
If this parameter specifies an existing custom security trimmer, the trimmer will be removed and replaced with the custom trimmer.
Remove the existing trimmer before you add a new one.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RulePath
Specifies the content path where the security trimmer will be applied.

The string must be a valid URI in the form file:\\\\server_name\content, and it must correspond to an existing crawl rule.

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

### -SearchApplication
Adds the security trimmer to the specified search application.

The type must be a valid GUID in the form 12345678-90ab-cdef-1234-567890bcdefgh, a valid search application name, for example, SearchApp1, or an instance of a valid SearchServiceApplication object.

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

### -TypeName
Specifies the strong named assembly name of a security trimmer type.
The strong name must refer to a type whose assembly is deployed to the global assembly cache on a query server and that type must implement the ISecurityTrimmerPre, ISecurityTrimmerPost or ISecurityTrimmer2 interface.
Security trimming can be done in two places: before query execution (ISecurityTrimmerPre) or after the results set has returned (ISecurityTrimmerPost or ISecurityTrimmer2).
For how to reference a strong name assembly, see http://msdn.microsoft.com/en-us/library/s1sx4kfb.aspx (http://msdn.microsoft.com/en-us/library/s1sx4kfb.aspx)

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Properties
Specifies the name-value pairs that specify the configuration properties.

The type must be in the following name/value pair format: Name1~Value1~Name2~Value2~

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

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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
