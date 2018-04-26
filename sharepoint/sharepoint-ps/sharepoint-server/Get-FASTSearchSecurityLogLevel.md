---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchSecurityLogLevel
---

# Get-FASTSearchSecurityLogLevel

## SYNOPSIS
Gets the log level general setting.

## SYNTAX

```
Get-FASTSearchSecurityLogLevel [[-Worker] <WorkerPoolNode>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves the configuration information for the log level general setting.
The log level controls the type of information that is logged by the security system.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1-----------------
```
PS C:\>Get-FASTSearchSecurityLogLevel
```

This example gets the configuration information for the log level's general setting, specifying the data logged by the security system.

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

[Set-FASTSearchSecurityLogLevel](Set-FASTSearchSecurityLogLevel.md)

