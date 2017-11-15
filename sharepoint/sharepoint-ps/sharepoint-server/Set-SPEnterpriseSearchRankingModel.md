---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPEnterpriseSearchRankingModel
schema: 2.0.0
---

# Set-SPEnterpriseSearchRankingModel

## SYNOPSIS
Sets the properties of a ranking model for a shared search service application.


## SYNTAX

```
Set-SPEnterpriseSearchRankingModel [-Identity] <RankingModelPipeBind> -Owner <SearchObjectOwner>
 -RankingModelXML <String> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates properties of a ranking model for a search service application.
The name, description, and identifier (ID) for a ranking model are contained in the .xml file specified in RankingModelXML.
If the Identity parameter is not specified or the identity does not match any of the ranking models in the collection, an exception is thrown and the default ranking model is used.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
$owner = Get-SPEnterpriseSearchOwner -Level ssa
$rankingModel = Get-SPEnterpriseSearchRankingModel -Identity 8f6fd0bc-06f9-43cf-bbab-08c377e083f4 -SearchApplication $ssa -Owner $owner 
$newrankmodel = Get-Content .\newRankModel.xml
$newrankmodel = [String]$newrankmodel
Set-SPEnterpriseSearchRankingModel -Identity $rankingModel -SearchApplication $ssa -Owner $owner -RankingModelXML $newrankmodel
```

This example reconfigures the ranking model with the identity 8f6fd0bc-06f9-43cf-bbab-08c377e083f4 with the new ranking model specified in newRankModel.xml.


## PARAMETERS

### -Identity
Specifies the ranking model to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh, or an instance of a valid RankingModel object.

```yaml
Type: RankingModelPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Owner
Specifies the scope where the ranking model is available.
The available scopes are: SSA, Tenant, Site Collection or Site.
A ranking model can be available in multiple scopes.

```yaml
Type: SearchObjectOwner
Parameter Sets: (All)
Aliases: o
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RankingModelXML
Specifies the name of the XML representation of the new ranking model.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the ranking model.

The type must be a valid GUID in the 9bf36458-fc99-4f7b-b060-867e5a63adce, a valid search application name (for example, SearchApp1), or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
