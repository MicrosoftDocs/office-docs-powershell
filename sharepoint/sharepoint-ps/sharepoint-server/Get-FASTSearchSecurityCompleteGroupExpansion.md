---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchSecurityCompleteGroupExpansion
---

# Get-FASTSearchSecurityCompleteGroupExpansion

## SYNOPSIS
Gets complete group expansion information for a user.

## SYNTAX

```
Get-FASTSearchSecurityCompleteGroupExpansion [-Identity] <String> [-User] <String> [-ExtraProperties]
 [[-XmlFile] <String>] [[-Worker] <WorkerPoolNode>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet gets troubleshooting information for group expansions and aliaser processing performed to create the user search security filter.

The group expansion information contains the user, expanded groups that contain the user (i.e., the user is a member of the group), and all groups that contain other expanded groups.

The aliaser procession information contains all mapped to users and groups based on the regular expression and XML aliaser mapping definitions.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchSecurityCompleteGroupExpansion -Identity ln1 -User user1
```

This example retrieves complete group expansion information for "user1" in the user store "ln1", showing all equivalent users and groups in all user stores, by finding all parents and processing all aliaser mappings.

## PARAMETERS

### -Identity
The identity of the user store containing the user to expand.

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

### -User
The user or group identifier to expand.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ExtraProperties
If specified, the command gets the extra properties for all principals (user and groups) returned by the resolve.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 3
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -XmlFile
The absolute path to an XML file which is accessible and writable from the security manager.
If specified, complete expansion information is written as XML to this file.

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

### -Worker
The optional Worker parameter specifies the WorkerPoolNode object for the security worker that is to handle the request.

```yaml
Type: WorkerPoolNode
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 9999
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

