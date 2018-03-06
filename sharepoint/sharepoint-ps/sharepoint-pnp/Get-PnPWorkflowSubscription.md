---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPWorkflowSubscription

## SYNOPSIS
Return a workflow subscription

## SYNTAX 

```powershell
Get-PnPWorkflowSubscription [-Name <String>]
                            [-List <ListPipeBind>]
                            [-Web <WebPipeBind>]
                            [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Returns a workflow subscriptions from a list

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPWorkflowSubscription -Name MyWorkflow
```

Gets an Workflow subscription with the name "MyWorkflow".

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPWorkflowSubscription -Name MyWorkflow -list $list
```

Gets an Workflow subscription with the name "MyWorkflow" from the list $list.

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPList -identity "MyList" | Get-PnPWorkflowSubscription -Name MyWorkflow
```

Gets an Workflow subscription with the name "MyWorkflow" from the list "MyList".

## PARAMETERS

### -List
A list to search the association for

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: False
Position: 1
Accept pipeline input: False
```

### -Name
The name of the workflow

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
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

## OUTPUTS

### Microsoft.SharePoint.Client.WorkflowServices.WorkflowSubscription

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)