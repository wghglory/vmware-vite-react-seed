import {CdsButtonAction} from '@cds/react/button-action';
import {CdsGrid, CdsGridCell, CdsGridColumn, CdsGridFooter, CdsGridRow} from '@cds/react/grid';
import {CdsRadio} from '@cds/react/radio';
import {useQuery} from '@tanstack/react-query';

import PageContainer from '@/components/common/PageContainer';
import http from '@/utils/axios';

export default function DatagridPage() {
  const query = useQuery(['test-vcd-rde-API'], () =>
    http.get('entities/types/vmware/dsConfig/0.1.0?pageSize=999&page=1&filter=state==RESOLVED'),
  );

  return (
    <PageContainer title="Datagrid Page" className="space-y-8">
      <CdsGrid selectable="single">
        <CdsGridColumn type="action"></CdsGridColumn>
        <CdsGridColumn type="action"></CdsGridColumn>
        <CdsGridColumn>Host</CdsGridColumn>
        <CdsGridColumn>Status</CdsGridColumn>
        <CdsGridColumn>CPU</CdsGridColumn>
        <CdsGridColumn>Memory</CdsGridColumn>

        <CdsGridRow>
          <CdsGridCell>
            <CdsRadio>
              <input type="radio" name="hosts" aria-label="select host vm-host-001" />
            </CdsRadio>
          </CdsGridCell>
          <CdsGridCell>
            <CdsButtonAction aria-label="open menu"></CdsButtonAction>
          </CdsGridCell>
          <CdsGridCell>vm-host-001</CdsGridCell>
          <CdsGridCell>online</CdsGridCell>
          <CdsGridCell>5%</CdsGridCell>
          <CdsGridCell>10%</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>
            <CdsRadio>
              <input type="radio" name="hosts" aria-label="select host vm-host-001" />
            </CdsRadio>
          </CdsGridCell>
          <CdsGridCell>
            <CdsButtonAction aria-label="open menu"></CdsButtonAction>
          </CdsGridCell>
          <CdsGridCell>vm-host-001</CdsGridCell>
          <CdsGridCell>online</CdsGridCell>
          <CdsGridCell>5%</CdsGridCell>
          <CdsGridCell>10%</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>
            <CdsRadio>
              <input type="radio" name="hosts" aria-label="select host vm-host-001" />
            </CdsRadio>
          </CdsGridCell>
          <CdsGridCell>
            <CdsButtonAction aria-label="open menu"></CdsButtonAction>
          </CdsGridCell>
          <CdsGridCell>vm-host-001</CdsGridCell>
          <CdsGridCell>online</CdsGridCell>
          <CdsGridCell>5%</CdsGridCell>
          <CdsGridCell>10%</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>
            <CdsRadio>
              <input type="radio" name="hosts" aria-label="select host vm-host-001" />
            </CdsRadio>
          </CdsGridCell>
          <CdsGridCell>
            <CdsButtonAction aria-label="open menu"></CdsButtonAction>
          </CdsGridCell>
          <CdsGridCell>vm-host-001</CdsGridCell>
          <CdsGridCell>online</CdsGridCell>
          <CdsGridCell>5%</CdsGridCell>
          <CdsGridCell>10%</CdsGridCell>
        </CdsGridRow>

        <CdsGridFooter></CdsGridFooter>
      </CdsGrid>
    </PageContainer>
  );
}
