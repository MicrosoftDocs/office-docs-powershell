---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchSecurityGeneralSettings
---

# Get-FASTSearchSecurityGeneralSettings

## SYNOPSIS
Gets the security general settings.

## SYNTAX

```
Get-FASTSearchSecurityGeneralSettings [[-Worker] <WorkerPoolNode>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves configuration information for general security settings, such as:

-- Default user store ID
-- CCTK server port number
-- CCTK server enabled
-- Default log level
-- Log level namespaces
-- Public Filter FQL

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchSecurityGeneralSettings | fl
```

This example retrieves the configuration setting for all the general security settings and formats the information as a list.

## PARAMETERS

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

