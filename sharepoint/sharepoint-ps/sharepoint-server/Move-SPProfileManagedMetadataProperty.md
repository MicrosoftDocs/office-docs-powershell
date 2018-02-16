---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Move-SPProfileManagedMetadataProperty
schema: 2.0.0
---

# Move-SPProfileManagedMetadataProperty

## SYNOPSIS
Moves multiple-string values into a term set.

## SYNTAX

```
Move-SPProfileManagedMetadataProperty -Identity <String>
 -ProfileServiceApplicationProxy <SPServiceApplicationProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-AvailableForTagging] [-Confirm] [-TermSetName <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Move-SPProfileManagedMetadataProperty cmdlet to move multiple-string or single-string property values into a term set that you specify.
If you do not specify a term set, the values are moved into the Keywords term set.
Any new values you add to the property after running the cmdlet will be moved into the term set that you specified.

After a user profile application has been upgraded from Office SharePoint Server, single-string and multiple-string value properties are not available for use unless the Move-SPProfileManagedMetadataProperty cmdlet is run to map them to term sets within Managed Metadata Service.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------------EXAMPLE 1------------------ 
```
C:\PS>Move-SPProfileManagedMetadataProperty -Identity SPS-Interests -TermSetName Interests -AvailableForTagging -ProfileServiceApplicationProxy dbc4ccf5-b245-4e0f-8696-235402f83260
```

This example moves values from the SPS-Interests property into a new term set called Interests, and marks that term set as available for tagging.

### ---------------EXAMPLE 2------------------ 
```
C:\PS>Get-SPServiceApplicationProxy | ?{$_.DisplayName.Contains("User Profile Service")} | Move-SPProfileManagedMetadataProperty -Identity SPS-Interests -TermSetName Interests -AvailableForTagging
```

This example performs the same task as Example 1, but pipes the result for the ProfileServiceApplicationProxy parameter by using the Get-SPServiceApplicationProxy cmdlet.

## PARAMETERS

### -Identity
Specifies the name of the profile property that needs to be migrated to the taxonomy.

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

### -ProfileServiceApplicationProxy
Specifies the name of the User Profile Service Application Proxy to use.

```yaml
Type: SPServiceApplicationProxyPipeBind
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

### -AvailableForTagging
Determines whether the terms in the resulting term set can be used for Managed Metadata tagging.
If a term set has more than 30,000 terms, using it for Managed Metadata tagging may lead to performance issues on the client computer.
Because a majority of the profile properties may have more than 30,000 terms, the default value is No.

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

### -TermSetName
When specified, the term set name is created.
If the TermSetName parameter is not specified, the property is mapped to the Keywords term set in Managed Metadata Service.

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

