---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpworkflowinstance
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPWorkflowInstance
---

# Get-PnPWorkflowInstance

## SYNOPSIS
Gets SharePoint 2010/2013 workflow instances

## SYNTAX 

### By WorkflowSubscription
```powershell
Get-PnPWorkflowInstance -WorkflowSubscription <WorkflowSubscriptionPipeBind>
                        [-Web <WebPipeBind>]
                        [-Connection <PnPConnection>]
```

### By List and ListItem
```powershell
Get-PnPWorkflowInstance -List <ListPipeBind>
                        -ListItem <ListItemPipeBind>
                        [-Web <WebPipeBind>]
                        [-Connection <PnPConnection>]
```

## DESCRIPTION
Gets all SharePoint 2010/2013 workflow instances

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPWorkflowInstance -List "My Library" -ListItem $ListItem
```

Retrieves workflow instances running against the provided item on list "My Library"

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPWorkflowInstance -List "My Library" -ListItem 2
```

Retrieves workflow instances running against the provided item with 2 in the list "My Library"

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPWorkflowSubscription | Get-PnPWorkflowInstance
```

Retrieves workflow instances from all subscriptions

## PARAMETERS

### -List
The List for which workflow instances should be retrieved

```yaml
Type: ListPipeBind
Parameter Sets: By List and ListItem

Required: True
Position: 0
Accept pipeline input: False
```

### -ListItem
The List Item for which workflow instances should be retrieved

```yaml
Type: ListItemPipeBind
Parameter Sets: By List and ListItem

Required: True
Position: 1
Accept pipeline input: False
```

### -WorkflowSubscription
The workflow subscription for which workflow instances should be retrieved

```yaml
Type: WorkflowSubscriptionPipeBind
Parameter Sets: By WorkflowSubscription

Required: True
Position: 0
Accept pipeline input: True
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)