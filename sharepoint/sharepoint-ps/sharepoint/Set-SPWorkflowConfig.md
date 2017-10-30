---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPWorkflowConfig

## SYNOPSIS
Configures the workflow settings for the specified Web application.


## SYNTAX

### SiteCollection
```
Set-SPWorkflowConfig [-SiteCollection] <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-DeclarativeWorkflowsEnabled <Boolean>] [-EmailNoPermissionParticipantsEnabled <Boolean>]
 [-SendDocumentToExternalParticipants <Boolean>] [-SingleWorkflowEpisodeTimeout <Int32>] [<CommonParameters>]
```

### WebApplication
```
Set-SPWorkflowConfig [-WebApplication] <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-DeclarativeWorkflowsEnabled <Boolean>]
 [-EmailNoPermissionParticipantsEnabled <Boolean>] [-SendDocumentToExternalParticipants <Boolean>]
 [-SingleWorkflowEpisodeTimeout <Int32>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the `Set-SPWorkflowConfig` cmdlet to configure the workflow settings for the specified Web application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE-----------------------
```
C:\PS>Set-SPWorkflowConfig -webapplication http://sitename DeclarativeWorkflowsEnabled $true -EmailNoPermissionParticipantsEnabled $true -SendDocumentToExternalParticipants $false
```

This example sets the workflow settings for the specified Web application to turn on declarative workflows, turn on e-mail to participants who do not have permissions to the site and turn off the functionality to send e-mail messages as attachments to external participants.

No return values.
Use the `Get-SPWorkflowConfig` cmdlet to see values.
To set farm-level workflow settings for event-delivery time-out and to postpone threshold and batch size, use `Set-SPFarmConfig`.


## PARAMETERS

### -SiteCollection
Specifies the name or URL of the site collection.

The only other parameter that is used with the SiteCollection parameter is the DeclarativeWorkflowsEnabled parameter.
No other parameters are used.

```yaml
Type: SPSitePipeBind
Parameter Sets: SiteCollection
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -WebApplication
Specifies the name or URL of the Web application.

The type must be a valid name or GUID, in the form WebApplication-1212, or a URL, in the form http://server_name/WebApplication-1212.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: WebApplication
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### -DeclarativeWorkflowsEnabled
Sets whether declarative workflows are allowed to run in the Web application.

The type must be either 1 for True or 0 for False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailNoPermissionParticipantsEnabled
Sets whether workflows send task e-mail messages to users who do not have permissions to the site in which the workflows are running.

The type must be  either 1 for True or 0 for False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendDocumentToExternalParticipants
Sets whether workflows automatically send a copy of the document as an e-mail attachment to participants who do not have access to the site or who are not in any linked directory other than Active Directory Domain Services (AD DS).

The type must be either 1 for True or 0 for False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SingleWorkflowEpisodeTimeout
{{Fill SingleWorkflowEpisodeTimeout Description}}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

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
