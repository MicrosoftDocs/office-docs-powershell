---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: New-FASTSearchSecurityXMLAliaser
---

# New-FASTSearchSecurityXMLAliaser

## SYNOPSIS
Creates an XML principal aliaser.

## SYNTAX

```
New-FASTSearchSecurityXMLAliaser [-InputUserStoreId] <String> [-OutputUserStoreIds] <String[]>
 [[-Identity] <String>] [[-InputPropertyName] <String>] [-ObjectToClone <SecurityXMLAliaser>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates an XML aliaser to map users and groups from one user store to users and groups in other user stores, based on an XML mapping file.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
PS C:\>New-FASTSearchSecurityXMLAliaser -InputUserStoreId win -OutputUserStoreIds ln3 -InputPropertyName mail
```

This example creates an XML principal aliaser to map the mail property of a Microsoft user store to users and groups in another user store.

Use the Set-FASTSearchSecurityXMLAliaser cmdlet to upload the XML mapping file.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Get-FASTSearchSecurityAliaser xmlalias2 | New-FASTSearchSecurityXMLAliaser -Identity myxmlalias -OutputUserStoreIds ln2
```

This example creates an XML principal aliaser based on an existing XML aliaser but sets the output user store IDs to 'ln2'.

Use the Set-FASTSearchSecurityXMLAliaser cmdlet to upload an XML mapping file with desired mappings for the new aliaser.

## PARAMETERS

### -InputUserStoreId
The identity of the mapped-from user store.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -OutputUserStoreIds
A comma-separated list of mapped-to user store identities.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Identity
The identity of the aliaser.
An identity is generated if the parameter is not specified.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 4
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -InputPropertyName
The user/group property name this regular expression pattern is matched against.

The InputPropertyName is one of the following:

-- $PRINCIPAL_REFERENCE_ID - The identifier of the user or group. This is the default.

Be sure to enclose in single quotes: '$PRINCIPAL_REFERENCE_ID'

-- $PRINCIPAL_REFERENCE_ALIAS - The alias of the user or group.

Be sure to enclose in single quotes: '$PRINCIPAL_REFERENCE_NAME'

Any other property of the user or group.
Refer to your specific user store for other properties that the user store exposes.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 5
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ObjectToClone
A SecurityXMLAliaserobject whose property values are copied as a baseline in the creation of another SecurityXMLAliaser aliaser.

```yaml
Type: SecurityXMLAliaser
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

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

[Set-FASTSearchSecurityXMLAliaser](Set-FASTSearchSecurityXMLAliaser.md)

[Get-FASTSearchSecurityXMLAliaser](Get-FASTSearchSecurityXMLAliaser.md)

