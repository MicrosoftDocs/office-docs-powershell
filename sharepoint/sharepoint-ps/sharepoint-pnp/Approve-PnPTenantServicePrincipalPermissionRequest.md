---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Approve-PnPTenantServicePrincipalPermissionRequest

## SYNOPSIS
Approves a permission request for the current tenant's "SharePoint Online Client" service principal

## SYNTAX 

```powershell
Approve-PnPTenantServicePrincipalPermissionRequest -RequestId <GuidPipeBind>
                                                   [-Force [<SwitchParameter>]]
                                                   [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Approves a permission request for the current tenant's "SharePoint Online Client" service principal

The return value of a successful call is a permission grant object.

To get the collection of permission grants for the "SharePoint Online Client" service principal, use the Get-PnPTenantServicePrincipalPermissionGrants command.

Approving a permission request also removes that request from the list of permission requests.

## PARAMETERS

### -Force
Specifying the Force parameter will skip the confirmation question.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -RequestId


```yaml
Type: GuidPipeBind
Parameter Sets: (All)

Required: True
Position: Named
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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)